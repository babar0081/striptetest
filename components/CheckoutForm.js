
'use client';

import { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
console.log('Stripe is not loaded yet')
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        
        return_url: 'http://localhost:3000/checkout-success',
      },
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={isProcessing || !stripe || !elements}>
        {isProcessing ? 'Processing...' : 'Pay now'}
      </button>
      {message && <div>{message}</div>}
    </form>
  );
};

export default CheckoutForm;
