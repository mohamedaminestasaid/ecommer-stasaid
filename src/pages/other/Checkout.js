import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const createStripeCharge = async (userId, articles) => {
  const response = await axios({
    url: "http://localhost:7777/items/stripe-create-checkout",
    method: "POST",
    data: {
      tsx: userId,
      articles: articles,
    },
  });
  return response.data;
};

const Checkout = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFetchCharge = async (userId, articles) => {
    try {
      const stripe = await loadStripe(
        "pk_test_51PXBmOCUSRTcdF7d1vbjX4o3MeZxXFyXOxTUWPLUgHactUW91dtINga7G7Vhi2AggdA4cO5xD1j6GDZp7Rm3NCqH00m2ItVBvC"
      );
      if (!stripe) return;
      const session = await createStripeCharge(userId, articles);

      console.log(session.id);
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        console.log(result.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const tsx = searchParams.get("tsx");
    const ufa = searchParams.get("ufa");
    const articles = searchParams.get("articles");

    if (!articles || !tsx) return;
    const parsedArticles = JSON.parse(articles);
    if (ufa === "606") {
      localStorage.setItem("limo", "ya");
    }
    handleFetchCharge(tsx, parsedArticles)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Please Wait...</h1>
      <p>Your request is being processed, Please give us a moment...</p>
    </div>
  );
};

export default Checkout;
