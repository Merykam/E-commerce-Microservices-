import React, { useState } from 'react'
import StripeCheckout,  {Token } from 'react-stripe-checkout';


const Stripe = () => {
 const [product,setProduct] =useState({name:"React from FB",price:10,productBy:"facebook"})
 const yy=process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY
  console.log(yy)
  const handleToken = (token: Token) => {
  //  console.log('Received token:', token);
  const body={
    token,
    product,
    orderId:2
  }
  
  const headers={
    "Content-Type":"application/json"
  }
  return fetch(`http://localhost:3003/payment/stripe`,{
    method:"POST",
    headers,
    body:JSON.stringify(body)
  }).then(response=>{
    console.log("RESPONSE",response)
    const {status}=response
    console.log("STATUS",status)
  }).catch(error=>console.log(error))
};
  return (
    <div>
      Stripe
      <StripeCheckout stripeKey={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!} token={handleToken} name='buy by react' amount={product.price*1000} />
    </div>
  )
}

export default Stripe