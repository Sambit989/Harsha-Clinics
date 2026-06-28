import mongoose from 'mongoose';
import dns from 'dns';

// Resolve MongoDB Atlas SRV records using Google DNS to avoid local resolver issues
if (dns && typeof dns.setServers === 'function') {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
}

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
  useLocalFallback: boolean;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseGlobal: MongooseCache | undefined;
}

let cached = global.mongooseGlobal;

if (!cached) {
  cached = global.mongooseGlobal = { conn: null, promise: null, useLocalFallback: false };
}

let lastConnectTime = 0;

export async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  // If in fallback mode, only retry connecting after 15 seconds to prevent dragging down page load times
  if (cached.useLocalFallback) {
    const now = Date.now();
    if (now - lastConnectTime < 15000) {
      return null;
    }
    console.log('Retrying MongoDB Atlas connection...');
    cached.useLocalFallback = false;
  }

  if (!MONGODB_URI) {
    console.warn('MONGODB_URI is not defined. Falling back to local JSON database.');
    cached.useLocalFallback = true;
    lastConnectTime = Date.now();
    return null;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 2500, // Timeout quickly if unreachable
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      console.log('Successfully connected to MongoDB Atlas.');
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
    cached.useLocalFallback = false;
  } catch (e: any) {
    cached.promise = null;
    console.warn('MongoDB connection failed. Falling back to local JSON database. Error:', e.message);
    cached.useLocalFallback = true;
    lastConnectTime = Date.now();
    return null;
  }

  return cached.conn;
}
