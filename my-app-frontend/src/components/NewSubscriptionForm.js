import React, { useState } from "react";

function NewSubscriptionForm({ handleAddSubscription, handleClose }) {
    const [numberOfStocks, setNumberOfStocks] = useState("");
    const [stockPrice, setStockPrice] = useState("");
    const [date, setDate] = useState("");
    const [stockId, setStockId] = useState("");
    const [userId, setUserId] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/subscriptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        number_of_stocks: numberOfStocks,
        stock_price: stockPrice,
        date: date,
        stock_id: stockId,
        user_id: userId
      }),
    })
      .then((r) => r.json())
      .then((newSubscription) => {
        handleAddSubscription(newSubscription);
        handleClose();
      });
  }

  return (
    <div className="new-subscription-form">
      <h2>New Subscription</h2>
      <form onSubmit={handleSubmit}>
      <input
          type="number"
          name="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          name="stockPrice"
          placeholder="Price"
          value={stockPrice}
          onChange={(e) => setStockPrice(e.target.value)}
        />
        <input
          type="number"
          name="stockId"
          step="0.01"
          placeholder="Stock ID"
          value={stockId}
          onChange={(e) => setStockId(parseFloat(e.target.value))}
        />
        <input
          type="number"
          name="userId"
          step="0.01"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(parseFloat(e.target.value))}
        />
        <input
          type="number"
          name="numberOfStocks"
          placeholder="Total number of stocks"
          value={numberOfStocks}
          onChange={(e) => setNumberOfStocks(e.target.value)}
        />
        <button type="submit">Add Stock</button>
      </form>
    </div>
  );
}

export default NewSubscriptionForm;