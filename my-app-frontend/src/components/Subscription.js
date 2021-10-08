import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import NewSubscriptionForm from "./NewSubscriptionForm";
import EditSubscriptionForm from "./EditSubscriptionForm"


function Subscription ({ subscription, onDeleteSubscription, onUpdateSubscription }) {
    const { id, number_of_stocks, stock_price, date, stock_id, user_id } = subscription;
    // const [updatedPrice, setUpdatedPrice] = useState(price);
    const dateInt = subscription.date;
    const dateStr = dateInt.toString();
    const len = dateStr.length
    const year = dateStr.slice(len - 4);
    const day = dateStr.slice(len - 6, len-4);
    const month = dateStr.slice(0, len-6);

    function handleDeleteClick() {
        fetch(`http://localhost:9292/subscriptions/${id}`, {
          method: "DELETE",
        });
    
        onDeleteSubscription(id);
    }


    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
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
        <tr key={subscription.id}>
                <td>{subscription.number_of_stocks}</td>
                <td>{subscription.stock_price}</td>
                <td>{month}/{day}/{year}</td>
                <td>{subscription.stock_id}</td>
                <td>{subscription.user_id}</td>
                <td>
                    <button onClick={togglePopup} >Edit {subscription.name}</button>
                </td>
                {isOpen && <Popup
                    content={<>
                    <div class="subscription-details">
                      <h1>Date: {month}/{day}/{year}</h1>
                      <h3>Stock ID: {subscription.stock_id}</h3>
                      <h4>User ID: {subscription.user_id}</h4> 
                      <h4>Total stocks: {subscription.number_of_stocks}</h4>
                    </div>
                    
                
                    <EditSubscriptionForm 
                      subscription={subscription} 
                      handleUpdateSubscription={onUpdateSubscription} 
                      handleClose={togglePopup}
                    />
                    <button onClick={handleDeleteClick} class="delete-button">Delete</button>
                    </>}
                    handleClose={togglePopup}
                />}
            </tr>
    );
}

export default Subscription;