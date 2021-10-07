import React, { useState, useEffect } from "react";
import Stock from "./Stock";

function StockList({ stockListArray, title, onViewMore }) {
    
    return (
        <div id="stock-list-container">
            <h2 id={title}>{title}</h2>
            <div id="stock-grid">
            {stockListArray.map(stock => {
                return(
                    <Stock key={stock.id} stock={stock}/>
                )
            })}
            </div>
            <hr></hr>
            {/* <button>View More</button> */}
        </div>
    );
}

export default StockList;