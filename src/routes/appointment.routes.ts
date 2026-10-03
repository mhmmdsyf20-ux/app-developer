import { Router } from 'express';
import { authenticate } from '../middlewares/auth';
import { getDoctors, createAppointment, getAppointments } from '../controllers/appointment.controller';

const router = Router();

router.get('/doctors', authenticate, getDoctors);
router.post('/appointments', authenticate, createAppointment);
router.get('/appointments', authenticate, getAppointments);

export default router;
