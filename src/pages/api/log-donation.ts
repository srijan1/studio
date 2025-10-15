import { firestore } from '@/lib/firebase-admin';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { amount, date } = req.body;

      if (!amount || !date) {
        return res.status(400).json({ error: 'Amount and date are required.' });
      }

      const donationData = {
        amount: parseFloat(amount),
        date: new Date(date),
        status: 'initiated',
      };

      const docRef = await firestore.collection('donations').add(donationData);

      console.log('Donation logged to Firestore with ID: ', docRef.id);
      res.status(200).json({ id: docRef.id, ...donationData });
    } catch (error) {
      console.error('Error logging donation to Firestore:', error);
      res.status(500).json({ error: 'Failed to log donation.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
