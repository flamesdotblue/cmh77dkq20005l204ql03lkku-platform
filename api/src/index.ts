import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import stripePackage from 'stripe';
import { router as healthRouter } from './routes/health.js';

const app = express();
app.use(cors({ origin: '*'}));
app.use(express.json({ verify: (req: any, _res, buf) => { (req as any).rawBody = buf; } }));

app.use('/api/health', healthRouter);

// Stripe webhook placeholder
const stripeSecret = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder';
const stripe = new stripePackage.Stripe(stripeSecret, { apiVersion: '2024-06-20' });
app.post('/api/webhooks/stripe', (req, res) => {
  const sig = req.headers['stripe-signature'] as string | undefined;
  if (!sig) return res.status(400).send('Missing signature');
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || 'whsec_placeholder';
  try {
    const event = stripe.webhooks.constructEvent((req as any).rawBody, sig, endpointSecret);
    switch (event.type) {
      case 'checkout.session.completed':
        console.log('Upgrade plan for customer');
        break;
      case 'invoice.payment_failed':
        console.log('Downgrade plan for customer');
        break;
      default:
        break;
    }
  } catch (err: any) {
    console.error('Webhook error', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  res.json({ received: true });
});

const server = http.createServer(app);
const io = new SocketIOServer(server, { cors: { origin: '*' } });

ios.on('connection', (socket) => {
  console.log('socket connected', socket.id);
  socket.on('join-workspace', (workspaceId: string) => {
    socket.join(`ws:${workspaceId}`);
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
