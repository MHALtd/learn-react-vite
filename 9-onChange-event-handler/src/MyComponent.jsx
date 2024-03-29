// onChange = event handler used primarily with form elements
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes

import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  //   e stands for event
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  function handleCommentChange(e) {
    setComment(e.target.value);
  }

  function handlePaymentChange(e) {
    setPayment(e.target.value);
  }

  function handleShippingChange(e) {
    setShipping(e.target.value);
  }
  return (
    <div>
      <p>Name: {name}</p>
      <input value={name} onChange={handleNameChange} />

      <p>Quantity: {quantity}</p>
      <input type="number" value={quantity} onChange={handleQuantityChange} />

      <p>Comment: {comment}</p>
      <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instruction" />

      <p>Payment: {payment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select your payment option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcatd">Giftcard</option>
      </select>

      <p>Shipping: {shipping}</p>
      <label>
        <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
        Pick Up
      </label>
      <br />
      <label>
        <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
        Delivery
      </label>
    </div>
  );
}

export default MyComponent;
