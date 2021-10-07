import React, { useState, useEffect } from "react";
import Stock from "./Stock";

function StockList({ stockListArray, title, onViewMore }) {

    const stockRows = stockListArray.map((stock, index) => (
            <tr key={stock.id}>
                <td>{stock.name}</td>
                <td>{stock.ticker_tag}</td>
                <td>{stock.price}</td>
                <td>{stock.total_stock}</td>
            </tr>
        ));
    return (
        <div id="stock-list-container">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Ticker Tag</th>
                    <th>Price</th>
                    <th>Total Stock</th>
                </tr>
                {stockRows}
            </table>
        </div>

        // <tr>
        // <td>Alfreds Futterkiste</td>
        // <td>Maria Anders</td>
        // <td>Germany</td>
        // </tr>
        // <tr>
        // <td>Centro comercial Moctezuma</td>
        // <td>Francisco Chang</td>
        // <td>Mexico</td>
        // </tr>
    );
}

export default StockList;