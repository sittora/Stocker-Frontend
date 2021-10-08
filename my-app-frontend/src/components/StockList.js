import React, { useState, useEffect } from "react";
import Stock from "./Stock";
import Popup from "./Popup";
import NewStockForm from "./NewStockForm";

function StockList({ title, onDeleteStock, onUpdateStock }) {
    useEffect(() => {
        // need this path to exist
        fetch("http://localhost:9292/stocks")
          .then((r) => r.json())
          .then((data) => {
            setAllStocks(data);
          });   
    }, [])

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        console.log('i was called!')
        setIsOpen(!isOpen);
    }

    const [allStocks, setAllStocks] = useState([]); 

    function handleAddStock(newStock) {
        const updatedStocksArray = [...allStocks, newStock];
        setAllStocks(updatedStocksArray);
      }
    
    function handleDeleteStock(id) {
        const updatedStocksArray = allStocks.filter((stock) => stock.id !== id);
        setAllStocks(updatedStocksArray);
      }

    const stockRows = allStocks.map((stock, index) => (
        <Stock 
            key={stock.id}
            stock={stock}
            onDeleteStock={handleDeleteStock}
            onUpdateStock={onUpdateStock}
        ></Stock>
    ));


    return (
        <div id="stock-list-container">
            <table class="center">
                <tr>
                    <th>Name</th>
                    <th>Ticker Tag</th>
                    <th>Price</th>
                    <th>Total Stock</th>
                    <th>Edit</th>
                </tr>
                {stockRows}
            </table>
            <button onClick={togglePopup}> Add a new stock {allStocks.name} </button>
            {isOpen && <Popup
                    content={<>
                    <h1>Add Stock</h1>
                    <NewStockForm handleAddStock={handleAddStock}/>
                    </>}
                    handleClose={togglePopup}
                />}
        </div>
    );
}

export default StockList;