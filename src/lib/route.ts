import { firestore } from '@/lib/firebase-admin';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { amount, date } = await req.json();

    if (!amount || !date) {
      return NextResponse.json({ error: 'Amount and date are required.' }, { status: 400 });
    }

<<<<<<< HEAD:src/app/api/log-donation/route.ts
    const donationData = {
      amount: parseFloat(amount),
      date: new Date(date),
      status: 'initiated',
    };

    const docRef = await firestore.collection('donations').add(donationData);
=======
    // Add a new document with a generated ID to the "donations" collection
    const docRef = await firestore.collection('donations').add({
      amount: Number(amount), // Store amount as a number
      date: new Date(date),   // Store date as a Firestore Timestamp
      status: 'initiated',    // You can track payment status here
    });
>>>>>>> 966110b (Revert "Merge branch 'main' of https://github.com/srijan1/studio"):src/lib/route.ts

    return NextResponse.json({ id: docRef.id, ...donationData }, { status: 200 });
  } catch (error: any) {
    console.error('Error logging donation to Firestore:', error);
    return NextResponse.json({ error: 'Failed to log donation.', details: error.message }, { status: 500 });
  }
}