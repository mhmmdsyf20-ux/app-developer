import { Router } from 'express';
import { authenticate } from '../middlewares/auth';
import { chatWithAi, generateReferral } from '../controllers/ai.controller';

const router = Router();

router.post('/chat', authenticate, chatWithAi);
router.post('/referral', authenticate, generateReferral);

export default router;
