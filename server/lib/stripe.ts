import Stripe from 'stripe';
import 'dotenv/config'; // Ensure environment variables are loaded

const secretKey = process.env.STRIPE_SECRET_KEY;

if (!secretKey) {
  throw new Error('Stripe secret key not found in environment variables.');
}

export const stripe = new Stripe(secretKey, {
  apiVersion: '2024-06-20', // Use the latest API version
  typescript: true,
}); 