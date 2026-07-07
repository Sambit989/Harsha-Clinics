import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'data', 'appointments.json');

function initDb() {
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify([]));
  }
}

export function getLocalAppointments() {
  initDb();
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export function saveLocalAppointments(appointments: any[]) {
  initDb();
  fs.writeFileSync(dbPath, JSON.stringify(appointments, null, 2));
}
