import { Router } from 'express';
import { authenticate, requireRole } from '../middlewares/auth';
import { registerBalita, getSemuaBalita, addBalitaCheckup, getBalitaCheckups } from '../controllers/balita.controller';

const router = Router();

// Routes for Balita management
router.post('/', authenticate, requireRole(['KADER', 'ADMIN']), registerBalita);
router.get('/', authenticate, getSemuaBalita);
router.post('/:balitaId/checkups', authenticate, requireRole(['KADER', 'ADMIN']), addBalitaCheckup);
router.get('/:balitaId/checkups', authenticate, getBalitaCheckups);

export default router;
