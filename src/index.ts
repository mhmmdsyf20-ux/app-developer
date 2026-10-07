import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes';
import balitaRoutes from './routes/balita.routes';
import lansiaRoutes from './routes/lansia.routes';
import appointmentRoutes from './routes/appointment.routes';
import aiRoutes from './routes/ai.routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  /\.vercel\.app$/,
];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    const isAllowed = allowedOrigins.some(allowed =>
      typeof allowed === 'string' ? allowed === origin : allowed.test(origin)
    );
    isAllowed ? callback(null, true) : callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('NEXORA Pemkab API is running!');
});

app.use('/api/auth', authRoutes);
app.use('/api/balita', balitaRoutes);
app.use('/api/lansia', lansiaRoutes);
app.use('/api', appointmentRoutes);
app.use('/api/ai', aiRoutes);

if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export default app;
