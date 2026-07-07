import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db';
import Appointment from '@/lib/models/Appointment';
import { getLocalAppointments, saveLocalAppointments } from '@/lib/jsonDb';

// GET: Retrieve all appointments sorted by creation time (newest first)
export async function GET() {
  try {
    const conn = await dbConnect();
    
    // If database connection is failed/fallback
    if (!conn) {
      const appointments = getLocalAppointments();
      appointments.sort(
        (a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      return NextResponse.json({ success: true, data: appointments, isFallback: true });
    }

    const appointments = await Appointment.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: appointments, isFallback: false });
  } catch (error: any) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Server Error' },
      { status: 500 }
    );
  }
}

// POST: Create a new appointment
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, date, time, concern } = body;

    // Validate required fields
    if (!name || !phone || !date || !time) {
      return NextResponse.json(
        { success: false, error: 'Please provide all required fields: name, phone, date, time' },
        { status: 400 }
      );
    }

    const conn = await dbConnect();

    // If database connection is failed/fallback
    if (!conn) {
      const appointments = getLocalAppointments();
      const newApp = {
        _id: 'local_' + Math.random().toString(36).substr(2, 9),
        name,
        phone,
        email,
        date,
        time,
        concern,
        status: 'Pending',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      appointments.push(newApp);
      saveLocalAppointments(appointments);
      return NextResponse.json({ success: true, data: newApp, isFallback: true }, { status: 201 });
    }

    const appointment = await Appointment.create({
      name,
      phone,
      email,
      date,
      time,
      concern,
      status: 'Pending',
    });

    return NextResponse.json({ success: true, data: appointment, isFallback: false }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Server Error' },
      { status: 500 }
    );
  }
}
