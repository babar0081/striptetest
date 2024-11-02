
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Stripe Integration Demo</h1>
      <Link href="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
}
