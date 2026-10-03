import { Router } from 'express';
import { authenticate, requireRole } from '../middlewares/auth';
import { registerLansia, getSemuaLansia, addLansiaCheckup, getLansiaCheckups } from '../controllers/lansia.controller';

const router = Router();

// Routes for Lansia management
router.post('/', authenticate, requireRole(['KADER', 'ADMIN']), registerLansia);
router.get('/', authenticate, getSemuaLansia);
router.post('/:lansiaId/checkups', authenticate, requireRole(['KADER', 'ADMIN']), addLansiaCheckup);
router.get('/:lansiaId/checkups', authenticate, getLansiaCheckups);

export default router;
