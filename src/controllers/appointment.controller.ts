import { Request, Response } from 'express';
import prisma from '../utils/prisma';

interface AuthRequest extends Request {
  user?: any;
}

export const getDoctors = async (req: Request, res: Response) => {
  try {
    const doctors = await prisma.doctorProfile.findMany({
      include: {
        user: { select: { name: true, avatarUrl: true } }
      }
    });
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doctors' });
  }
};

export const createAppointment = async (req: AuthRequest, res: Response) => {
  try {
    const { doctorId, scheduledDate } = req.body;
    const patientId = req.user.id; // User dari JWT token

    const appointment = await prisma.appointment.create({
      data: {
        patientId,
        doctorId,
        scheduledDate: new Date(scheduledDate),
        status: 'PENDING'
      }
    });

    res.status(201).json({ message: 'Appointment created successfully', appointment });
  } catch (error) {
    console.error('Create Appointment Error:', error);
    res.status(500).json({ message: 'Error creating appointment' });
  }
};

export const getAppointments = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user.id;
    const role = req.user.role;

    let appointments: any[] = [];

    if (role === 'DOCTOR') {
      const doctor = await prisma.doctorProfile.findUnique({ where: { userId } });
      if (doctor) {
        appointments = await prisma.appointment.findMany({ where: { doctorId: doctor.id } });
      }
    } else {
      appointments = await prisma.appointment.findMany({ where: { patientId: userId } });
    }

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointments' });
  }
};
