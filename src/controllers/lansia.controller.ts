import { Request, Response } from 'express';
import prisma from '../utils/prisma';

interface AuthRequest extends Request {
  user?: any;
}

// 1. Tambah Data Lansia Baru
export const registerLansia = async (req: AuthRequest, res: Response) => {
  try {
    const { name, nik, dob, address, emergencyContact, userId } = req.body;

    const lansia = await prisma.lansiaProfile.create({
      data: {
        userId,
        nik,
        name,
        dob: new Date(dob),
        address,
        emergencyContact
      }
    });

    res.status(201).json({ message: 'Lansia registered successfully', lansia });
  } catch (error) {
    console.error('Register Lansia Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// 2. Ambil Semua Lansia
export const getSemuaLansia = async (req: Request, res: Response) => {
  try {
    const lansias = await prisma.lansiaProfile.findMany();
    res.status(200).json(lansias);
  } catch (error) {
    console.error('Get Lansia Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// 3. Tambah Checkup Bulanan Lansia
export const addLansiaCheckup = async (req: AuthRequest, res: Response) => {
  try {
    const { lansiaId } = req.params;
    const { systolicBp, diastolicBp, bloodGlucose, cholesterol, uricAcid, kaderId } = req.body;

    const checkup = await prisma.lansiaCheckup.create({
      data: {
        lansiaId,
        kaderId,
        systolicBp,
        diastolicBp,
        bloodGlucose,
        cholesterol,
        uricAcid,
        checkupDate: new Date()
      }
    });

    res.status(201).json({ message: 'Checkup added successfully', checkup });
  } catch (error) {
    console.error('Add Checkup Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// 4. Ambil Riwayat Checkup Lansia
export const getLansiaCheckups = async (req: Request, res: Response) => {
  try {
    const { lansiaId } = req.params;
    
    const checkups = await prisma.lansiaCheckup.findMany({
      where: { lansiaId },
      orderBy: { checkupDate: 'asc' }
    });

    res.status(200).json(checkups);
  } catch (error) {
    console.error('Get Checkup Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
