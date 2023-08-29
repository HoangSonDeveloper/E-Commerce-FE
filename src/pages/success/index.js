import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const successPageStyles = {
  textAlign: 'center',
  margin: '50px auto',
  maxWidth: '400px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const SuccessPage = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, countdown * 1000);

    // Update the countdown every second
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Clean up the timers when the component unmounts
    return () => {
      clearTimeout(redirectTimer);
      clearInterval(countdownInterval);
    };
  }, [router, countdown]);

  return (
    <div style={successPageStyles}>
      <h1>Payment Successful</h1>
      <p>Thank you for your payment!</p>
      <p>Your transaction has been successfully processed.</p>
      <p>You will be redirected to homepage in {countdown} seconds...</p>
      {/* Add any additional information or next steps here */}
    </div>
  );
};

export default SuccessPage;