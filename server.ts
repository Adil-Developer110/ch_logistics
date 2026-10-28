import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini Client if API key is present
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey) {
  aiClient = new GoogleGenAI({ apiKey });
}

// AI Freight Rate & Dispatch Assistant API
app.post('/api/ai-dispatch', async (req: Request, res: Response) => {
  try {
    const { prompt, truckType, lane } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      res.status(400).json({ error: 'Prompt is required' });
      return;
    }

    if (!aiClient) {
      // Helpful fallback response when GEMINI_API_KEY is not configured
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
You specialize in Dry Van, Reefer, Flatbed, Box Truck, and Power Only. 
Provide clear, concise, highly practical advice on:
1. Average rate-per-mile estimations and spot rate market trends for US freight lanes.
2. How CH Logistics helps owner-operators & small fleets negotiate higher rates, reduce deadhead miles, handle W-9/COI/RC paperwork, and recover detention/TONU claims.
3. Tips on maximizing gross revenue and gross margin while avoiding lowball broker offers.
Keep answers professional, energetic, friendly, trucker-focused, and concise (under 180 words). Emphasize CH Logistics' 24/7 dedicated service and zero long-term contract policy.`,
        temperature: 0.7,
      }
    });

    const replyText = response.text || 'Our dispatch team is ready to analyze your lane! Give us a call or submit a consultation request.';
    res.json({ reply: replyText, source: 'gemini' });
  } catch (error: any) {
    console.error('Error in /api/ai-dispatch:', error);
    res.status(500).json({ 
      error: 'Failed to process AI request',
      reply: 'CH Logistics dispatch desk is standing by! Our current market rates for Georgia-origin loads are averaging $2.50-$3.20/mile. Call us at (404) 555-0199 for an instant rate confirmation.' 
    });
  }
});

// Contact / Rate Inquiry Submission Endpoint
app.post('/api/contact', (req: Request, res: Response) => {
  const { name, phone, email, mcNumber, truckType, preferredLanes } = req.body;

  if (!name || !phone) {
    res.status(400).json({ success: false, message: 'Name and Phone number are required.' });
    return;
  }

  const referenceId = `CH-${Math.floor(100000 + Math.random() * 900000)}`;
  
  res.json({
    success: true,
    referenceId,
    message: `Thank you ${name}! Your dispatch consultation request (${referenceId}) has been logged. A senior CH Logistics dispatcher will call you at ${phone} within 15 minutes.`,
    details: {
      name,
      phone,
      email: email || 'Not provided',
      mcNumber: mcNumber || 'Pending',
      truckType: truckType || 'Dry Van',
      preferredLanes: preferredLanes || 'Nationwide'
    }
  });
});

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', company: 'CH Logistics', timestamp: new Date().toISOString() });
});

// Setup Vite or Static File Serving
if (process.env.NODE_ENV !== 'production') {
  const { createServer } = await import('vite');
  const vite = await createServer({
    server: { middlewareMode: true, hmr: false },
    appType: 'custom',
  });
  app.use(vite.middlewares);
  app.use('*', async (req, res, next) => {
    if (req.originalUrl.startsWith('/api')) return next();
    try {
      const template = await vite.transformIndexHtml(
        req.originalUrl,
        `<!doctype html>
        <html lang="en" class="dark">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>CH Logistics | Premier Truck Dispatch Services</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
          </head>
          <body class="bg-[#05070d] text-[#f1f4fb]">
            <div id="root"></div>
            <script type="module" src="/src/main.tsx"></script>
          </body>
        </html>`
      );
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e: any) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
} else {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req: Request, res: Response, next) => {
    if (req.originalUrl.startsWith('/api')) return next();
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`CH Logistics server running on http://localhost:${PORT}`);
});
