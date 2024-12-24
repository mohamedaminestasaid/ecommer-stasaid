import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js';


const Checkout = () => {

useEffect(() => {
    document.title = 'Payment Successful!';
    const isBedbugs = localStorage.getItem('bedbugs')
    if(isBedbugs === 'ya'){
      window.location = 'https://betbux.gg/'
    }
  }, []);
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <h1>Payment Successful!</h1>
      <p>Your Payment went through successfully, You can now close this window.</p>
    </div>
  );
};

export default Checkout;
