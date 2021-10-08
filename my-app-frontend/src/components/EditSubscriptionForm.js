import React, { useState } from "react";

function EditSubscriptionForm({ subscription, handleUpdateSubscription, handleClose }) {
  const [numberOfStocks, setNumberOfStocks] = useState("");
  const [stockPrice, setStockPrice] = useState("");
  const [date, setDate] = useState("");
  const [stockId, setStockId] = useState("");
  const [userId, setUserId] = useState("");

  function handleSubmit(e, currentSubscription) {
    e.preventDefault();
    fetch(`http://localhost:9292/subscriptions/${currentSubscription.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        number_of_stocks: numberOfStocks,
        stock_price: stockPrice,
        date: date,
        stock_id: stockId,
        user_id: userId
      })
    })
      .then((r) => r.json())
      .then((updatedSubscription) => {
          handleUpdateSubscription(updatedSubscription);
          handleClose();
        });
  }

  return (
    <div className="edit-stock-form">
      <h2>Edit Subscription</h2>
      <form onSubmit={e => handleSubmit(e, subscription)}>
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
          name="numberOfStocks"
          placeholder="Total number of stocks"
          value={numberOfStocks}
          onChange={(e) => setNumberOfStocks(e.target.value)}
        />
        <button onClick={handleUpdateSubscription} type="submit">Update Subscription</button>
      </form>
    </div>
  );
}

export default EditSubscriptionForm;