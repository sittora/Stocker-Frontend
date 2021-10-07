import React, { useState, useEffect } from "react";


function Stock ({ stock }) {
    const BASE_URL = "localhost:9292/stock";

    // useEffect(() => {
    //     fetch(`${BASE_URL}/stocks/${stock.id}`)
    //     .then(resp => resp.json())
    //     .then(data => {
    //         setSelectedStocks(data);
    //     });
    // }, []);
 
    return(
        <div>
        <h1>{stock.name}</h1>
        <p>{stock.ticker_tag}</p>
        <p>{stock.price}</p>
        <p>{stock.total_stock}</p>
        </div>
    );
}

export default Stock;

