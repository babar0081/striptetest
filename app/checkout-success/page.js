
'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function CheckoutSuccess() {
  const searchParams = useSearchParams();
  const paymentIntent = searchParams.get('payment_intent');
  const redirectStatus = searchParams.get('redirect_status');

  useEffect(() => {
    if (paymentIntent && redirectStatus === 'succeeded') {
      
      console.log('PaymentIntent ID:', paymentIntent);
    }
  }, [paymentIntent, redirectStatus]);

  return (
    <div>
      <h1>Payment Successful</h1>
      <p>Thank you for your purchase!</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
