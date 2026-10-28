import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey) {
  aiClient = new GoogleGenAI({ apiKey });
}

app.post('/api/ai-dispatch', async (req: Request, res: Response) => {
  try {
    const { prompt, truckType, lane } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      res.status(400).json({ error: 'Prompt is required' });
      return;
    }

    if (!aiClient) {
      res.json({
        reply: `Thank you for asking CH Logistics! For ${truckType || 'Dry Van'} loads in the ${lane || 'Southeast/Georgia'} region, our current average rates range between $2.45 - $3.15 per mile depending on destination and spot market conditions. Contact our 24/7 dispatch desk at (912) 217-4632 or submit an inquiry form for instant custom rate-lock support!`,
        source: 'system'
      });
      return;
    }

    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `You are CH Dispatch AI, an expert freight rate negotiator and truck dispatch consultant for CH Logistics (based in Atlanta, Georgia, serving carriers nationwide). 
Provide clear, concise, highly practical advice on average rate-per-mile estimations and spot rate market trends for US freight lanes.
Keep answers professional, friendly, trucker-focused, and concise. Emphasize CH Logistics' 24/7 dedicated service and zero long-term contract policy.`,
        temperature: 0.7,
      }
    });

    res.json({ reply: response.text || 'Our dispatch team is standing by! Call (912) 217-4632.', source: 'gemini' });
  } catch (error: any) {
    res.json({ reply: 'CH Logistics dispatch desk is standing by 24/7! Call us at (912) 217-4632 for instant rate lock support.' });
  }
});

app.post('/api/contact', (req: Request, res: Response) => {
  const { name, phone } = req.body;
  const referenceId = `CH-${Math.floor(100000 + Math.random() * 900000)}`;
  res.json({
    success: true,
    referenceId,
    message: `Thank you ${name || 'Carrier'}! Your request (${referenceId}) has been logged. Our dispatch desk will call you at ${phone || 'your number'} within 15 minutes.`
  });
});

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', company: 'CH Logistics' });
});

export default app;
