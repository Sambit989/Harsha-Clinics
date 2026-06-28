import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db';
import Appointment from '@/lib/models/Appointment';
import { getLocalAppointments, saveLocalAppointments } from '@/lib/jsonDb';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    if (!status || !['Pending', 'Confirmed', 'Cancelled'].includes(status)) {
      return NextResponse.json(
        { success: false, error: 'Invalid or missing status value' },
        { status: 400 }
      );
    }

    const conn = await dbConnect();

    // If database connection is failed/fallback
    if (!conn) {
      const appointments = getLocalAppointments();
      const appIndex = appointments.findIndex((a: any) => a._id === id);
      if (appIndex === -1) {
        return NextResponse.json(
          { success: false, error: 'Appointment not found' },
          { status: 404 }
        );
      }
      appointments[appIndex].status = status;
      appointments[appIndex].updatedAt = new Date().toISOString();
      saveLocalAppointments(appointments);
      return NextResponse.json({ success: true, data: appointments[appIndex], isFallback: true });
    }

    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!appointment) {
      return NextResponse.json(
        { success: false, error: 'Appointment not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: appointment, isFallback: false });
  } catch (error: any) {
    console.error('Error updating appointment:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Server Error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const conn = await dbConnect();

    // If database connection is failed/fallback
    if (!conn) {
      const appointments = getLocalAppointments();
      const appIndex = appointments.findIndex((a: any) => a._id === id);
      if (appIndex === -1) {
        return NextResponse.json(
          { success: false, error: 'Appointment not found' },
          { status: 404 }
        );
      }
      appointments.splice(appIndex, 1);
      saveLocalAppointments(appointments);
      return NextResponse.json({ success: true, data: { message: 'Appointment deleted successfully' }, isFallback: true });
    }

    const appointment = await Appointment.findByIdAndDelete(id);

    if (!appointment) {
      return NextResponse.json(
        { success: false, error: 'Appointment not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: { message: 'Appointment deleted successfully' }, isFallback: false });
  } catch (error: any) {
    console.error('Error deleting appointment:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Server Error' },
      { status: 500 }
    );
  }
}
