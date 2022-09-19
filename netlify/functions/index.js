require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async function (event) {
  let productsItems = JSON.parse(event.body).products;
  console.log(productsItems);
  const session = await stripe.checkout.sessions.create({
    line_items: productsItems,
    mode: "payment",
    success_url: `https://stripe-checkout.netlify.app/`,
    cancel_url: `https://stripe-checkout.netlify.app/`,
  });

  const statusCode = 200;
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  const data = {
    url: session.url,
  };

  return {
    statusCode,
    headers,
    body: JSON.stringify(data),
  };
};
