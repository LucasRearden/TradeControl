import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cors from "cors";
import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
}));

//ROUTES
app.get('/health', (_req, res) => res.send('ok'));

app.use('/auth', authRoutes);

export default app;