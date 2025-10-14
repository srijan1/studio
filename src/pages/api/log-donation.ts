import { database } from '@/lib/firebase';
import { ref, push, set } from 'firebase/database';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { amount, date } = req.body;

      if (!amount || !date) {
        return res.status(400).json({ message: 'Missing amount or date' });
      }

      const donationsRef = ref(database, 'donations');
      const newDonationRef = push(donationsRef);
      await set(newDonationRef, {
        amount,
        date,
      });

      res.status(200).json({ message: 'Donation logged successfully' });
    } catch (error) {
      console.error('Error logging donation:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
