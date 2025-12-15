export const createOrder = async (amount) => {
  const res = await fetch(
    `${import.meta.env.VITE_backend_url}/api/payment/create-order`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    }
  );

  return res.json();
};

export const verifyPayment = async (paymentData) => {
  const res = await fetch(
    `${import.meta.env.VITE_backend_url}/api/payment/verify`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paymentData),
    }
  );

  return res.json();
};