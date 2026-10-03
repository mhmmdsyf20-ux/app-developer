import { Request, Response } from 'express';
import prisma from '../utils/prisma';

// Helper interface untuk custom request yang memiliki user
interface AuthRequest extends Request {
  user?: any;
}

// 1. Tambah Data Balita Baru
export const registerBalita = async (req: AuthRequest, res: Response) => {
  try {
    const { name, dob, gender, birthWeight, birthHeight, parentId } = req.body;
    
    // Asumsi req.user.role adalah KADER yang memasukkan data, 
    // atau parent (PATIENT) yang meregistrasikan anaknya sendiri.

    const balita = await prisma.balitaProfile.create({
      data: {
        parentId,
        name,
        dob: new Date(dob),
        gender,
        birthWeight,
        birthHeight
      }
    });

    res.status(201).json({ message: 'Balita registered successfully', balita });
  } catch (error) {
    console.error('Register Balita Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// 2. Ambil Semua Balita
export const getSemuaBalita = async (req: Request, res: Response) => {
  try {
    const balitas = await prisma.balitaProfile.findMany({
      include: {
        parent: { select: { name: true, emailOrPhone: true } }
      }
    });
    res.status(200).json(balitas);
  } catch (error) {
    console.error('Get Balita Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// 3. Tambah Checkup Bulanan (KMS)
export const addBalitaCheckup = async (req: AuthRequest, res: Response) => {
  try {
    const { balitaId } = req.params;
    const { weight, height, headCircumference, kaderId } = req.body;

    // Logic perhitungan status gizi (stunting/normal) yang disederhanakan
    let nutritionalStatus = 'Normal';
    if (weight < 5.0 && height < 60) { // Hanya contoh perhitungan dummy
      nutritionalStatus = 'Beresiko Stunting';
    }

    const checkup = await prisma.balitaCheckup.create({
      data: {
        balitaId,
        kaderId,
        weight,
        height,
        headCircumference,
        nutritionalStatus,
        checkupDate: new Date()
      }
    });

    res.status(201).json({ message: 'Checkup added successfully', checkup });
  } catch (error) {
    console.error('Add Checkup Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// 4. Ambil Riwayat Checkup Balita (Untuk Grafik KMS)
export const getBalitaCheckups = async (req: Request, res: Response) => {
  try {
    const { balitaId } = req.params;
    
    const checkups = await prisma.balitaCheckup.findMany({
      where: { balitaId },
      orderBy: { checkupDate: 'asc' }
    });

    res.status(200).json(checkups);
  } catch (error) {
    console.error('Get Checkup Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
