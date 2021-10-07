import React, { useState } from "react";

function NewStockForm({ onAddStock }) {
  const [name, setName] = useState("");
  const [tickerTag, setTickerTag] = useState("");
  const [price, setPrice] = useState("");
  const [totalStock, setTotalStock] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/stocks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        tickerTag: tickerTag,
        price: price,
        totalStock: totalStock
      }),
    })
      .then((r) => r.json())
      .then((newStock) => onAddStock(newStock));
  }

  return (
    <div className="new-stock-form">
      <h2>New Stock</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Stock name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="tickerTag"
          placeholder="Ticker Tag"
          value={tickerTag}
          onChange={(e) => setTickerTag(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <input
          type="number"
          name="totalStock"
          placeholder="Total number of stocks"
          value={totalStock}
          onChange={(e) => setTotalStock(e.target.value)}
        />
        <button type="submit">Add Stock</button>
      </form>
    </div>
  );
}

export default NewStockForm;