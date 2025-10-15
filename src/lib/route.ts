import { firestore } from '@/lib/firebase-admin';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, date } = body;

    if (!amount || !date) {
      return NextResponse.json({ error: 'Amount and date are required' }, { status: 400 });
    }

    // Add a new document with a generated ID to the "donations" collection
    const docRef = await firestore.collection('donations').add({
      amount: Number(amount), // Store amount as a number
      date: new Date(date),   // Store date as a Firestore Timestamp
      status: 'initiated',    // You can track payment status here
    });

    console.log('Donation logged with ID: ', docRef.id);

    return NextResponse.json({ success: true, id: docRef.id }, { status: 200 });

  } catch (error) {
    console.error('Error logging donation:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: 'Failed to log donation', details: errorMessage }, { status: 500 });
  }
}