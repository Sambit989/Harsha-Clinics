import dns from 'dns';

// Globally resolve MongoDB Atlas SRV records using Google DNS
if (dns && typeof dns.setServers === 'function') {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
  console.log('Global DNS servers set to Google DNS.');
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
