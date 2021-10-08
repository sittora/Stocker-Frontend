import React, { useState } from "react";

function EditStockForm({ stock, handleUpdateStock, handleClose }) {
  const [name, setName] = useState("");
  const [tickerTag, setTickerTag] = useState("");
  const [price, setPrice] = useState("");
  const [totalStock, setTotalStock] = useState("");

  function handleSubmit(e, currentStock) {
    e.preventDefault();
    fetch(`http://localhost:9292/stocks/${currentStock.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        ticker_tag: tickerTag,
        price: price,
        total_stock: totalStock
      })
    })
      .then((r) => r.json())
      .then((updatedStock) => {
          handleUpdateStock(updatedStock);
          handleClose();
        });
  }

  return (
    <div className="edit-stock-form">
      <h2>Edit Stock</h2>
      <form onSubmit={e => handleSubmit(e, stock)}>
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
        <button onClick={handleUpdateStock} type="submit">Update Stock</button>
      </form>
    </div>
  );
}

export default EditStockForm;