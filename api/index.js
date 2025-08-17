// This file wraps the Express app for Vercel serverless
import express from 'express';
import cors from 'cors';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

const app = express();

app.use(cors({
  origin: ['https://jakemoore.dev', 'http://localhost:5173'],
  credentials: true
}));

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Add your API routes here
// Import from the built server files

export default app;
