import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js';


const Checkout = () => {

useEffect(() => {
    document.title = 'Payment Successful!';
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
      <h1>Payment Failed... :(</h1>
      <p>Your Payment Failed, You can now close this window </p>
    </div>
  );
};

export default Checkout;
