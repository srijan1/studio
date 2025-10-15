import { firestore } from '@/lib/firebase-admin';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  console.log('Received donation log request');
  try {
    const { amount, date } = await req.json();
    console.log('Request body:', { amount, date });

    if (!amount || !date) {
      console.error('Validation failed: Amount and date are required.');
      return NextResponse.json({ error: 'Amount and date are required.' }, { status: 400 });
    }

    const donationData = {
      amount: parseFloat(amount),
      date: new Date(date),
      status: 'initiated',
    };

    const docRef = await firestore.collection('donations').add(donationData);

    console.log('Donation logged to Firestore with ID: ', docRef.id);
    return NextResponse.json({ id: docRef.id, ...donationData }, { status: 200 });
  } catch (error: any) {
    console.error('Error logging donation to Firestore:', error);
    return NextResponse.json({ error: 'Failed to log donation.', details: error.message }, { status: 500 });
  }
}
