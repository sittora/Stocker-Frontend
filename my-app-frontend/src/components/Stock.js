import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import NewStockForm from "./NewStockForm";
import EditStockForm from "./EditStockForm"


function Stock ({ stock, onDeleteStock, onUpdateStock }) {
    console.log(stock);
    const { id, name, ticker_tag, price, total_stock } = stock;
    const [updatedPrice, setUpdatedPrice] = useState(price);

    function handleDeleteClick() {
        fetch(`http://localhost:9292/stocks/${id}`, {
          method: "DELETE",
        });
    
        onDeleteStock(id);
    }


    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        console.log('i was called!')
        setIsOpen(!isOpen);
    }


    // function handlePriceFormSubmit(e) {
    //     e.preventDefault();
    //     fetch(`http://localhost:9292/stocks/${id}`, {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ price: updatedPrice }),
    //     })
    //       .then((r) => r.json())
    //       .then((updatedStock) => {
    //         onUpdateStock(updatedStock);
    //       });
    // }
 
    return(
        <tr key={stock.id}>
                <td>{stock.name}</td>
                <td>{stock.ticker_tag}</td>
                <td>{stock.price}</td>
                <td>{stock.total_stock}</td>
                <td>
                    <button onClick={togglePopup} >Edit {stock.name}</button>
                </td>
                {isOpen && <Popup
                    content={<>
                    <div class="stock-details">
                      <h1>{stock.name}</h1>
                      <h3>{stock.ticker_tag}</h3>
                      <h4>Price: ${stock.price}</h4> 
                      <h4>Total stocks: {stock.total_stock}</h4>
                    </div>
                    
                
                    <EditStockForm 
                      stock={stock} 
                      handleUpdateStock={onUpdateStock} 
                      handleClose={togglePopup}
                    />
                    <button onClick={handleDeleteClick} class="delete-button">Delete</button>
                    </>}
                    handleClose={togglePopup}
                />}
            </tr>
    );
}

export default Stock;

