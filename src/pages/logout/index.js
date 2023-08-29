import api from '@/utils/axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const logoutStyle = {
  textAlign: 'center',
  margin: '50px auto',
  maxWidth: '400px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const Logout = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    async function logOut() {
      localStorage.removeItem('user');
      await api.post(`/auth/logout`);
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
  }

  logOut();
  }, [router, countdown]);

  return (
    <div style={logoutStyle}>
      <h1>You have logged out!</h1>
      <p>You will be redirected to homepage in {countdown} seconds...</p>
      {/* Add any additional information or next steps here */}
    </div>
  );
};

export default Logout;