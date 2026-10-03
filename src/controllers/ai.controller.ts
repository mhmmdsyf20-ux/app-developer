import { Request, Response } from 'express';
import prisma from '../utils/prisma';

interface AuthRequest extends Request {
  user?: any;
}

export const chatWithAi = async (req: AuthRequest, res: Response) => {
  try {
    const { persona, message } = req.body;
    const patientId = req.user.id;

    // TODO: Integrasi dengan LLM (OpenAI/Gemini) menggunakan API Key
    // Placeholder response:
    const aiResponse = `Ini adalah balasan dummy dari AI dengan persona ${persona}. Gejala yang Anda sebutkan: ${message}`;
    const preliminaryDiagnosis = "Indikasi ringan penyakit tertentu berdasarkan gejala";

    // Simpan riwayat
    const consultation = await prisma.aIConsultation.create({
      data: {
        patientId,
        persona,
        symptoms: message,
        preliminaryDiagnosis
      }
    });

    res.status(200).json({ reply: aiResponse, diagnosis: preliminaryDiagnosis, consultationId: consultation.id });
  } catch (error) {
    console.error('AI Chat Error:', error);
    res.status(500).json({ message: 'Error processing AI chat' });
  }
};

export const generateReferral = async (req: AuthRequest, res: Response) => {
  try {
    const { consultationId, destinationFacility } = req.body;
    const patientId = req.user.id;

    const consultation = await prisma.aIConsultation.findUnique({ where: { id: consultationId } });
    if (!consultation) return res.status(404).json({ message: 'Consultation not found' });

    const referralCode = `RUJ-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

    const referral = await prisma.referralLetter.create({
      data: {
        referralCode,
        patientId,
        originPuskesmas: 'Sistem NEXORA', // Default AI
        destinationFacility,
        diagnosis: consultation.preliminaryDiagnosis
      }
    });

    res.status(201).json({ message: 'Referral generated', referral });
  } catch (error) {
    res.status(500).json({ message: 'Error generating referral' });
  }
};
