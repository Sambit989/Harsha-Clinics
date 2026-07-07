import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  concern?: string;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
  createdAt: Date;
}

const AppointmentSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: false },
    date: { type: String, required: true },
    time: { type: String, required: true },
    concern: { type: String, required: false },
    status: {
      type: String,
      enum: ['Pending', 'Confirmed', 'Cancelled'],
      default: 'Pending',
      required: true,
    },
  },
  {
    timestamps: true, // This automatically adds createdAt and updatedAt fields
  }
);

export default mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);
