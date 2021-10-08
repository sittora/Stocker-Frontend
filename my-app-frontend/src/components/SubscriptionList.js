import React, { useState, useEffect } from "react";
import Subscription from "./Subscription"; 
import NewSubscriptionForm from "./NewSubscriptionForm"; 
import Popup from "./Popup";

function SubscriptionList({ title, onDeleteSubscription, onUpdateSubscription }) {
    useEffect(() => {
        // need this path to exist
        fetch("http://localhost:9292/subscriptions")
          .then((r) => r.json())
          .then((data) => {
            setAllSubscriptions(data);
          });   
    }, [])

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        console.log('i was called!')
        setIsOpen(!isOpen);
    }

    const [allSubscriptions, setAllSubscriptions] = useState([]); 

    function handleAddSubscription(newSubscription) {
        const updatedSubscriptionsArray = [...allSubscriptions, newSubscription];
        setAllSubscriptions(updatedSubscriptionsArray);
    }
    
    function handleDeleteSubscription(id) {
        const updatedSubscriptionsArray = allSubscriptions.filter((subscription) => subscription.id !== id);
        setAllSubscriptions(updatedSubscriptionsArray);
    }
    
    
    function handleUpdateSubscription(updatedSubscription) {
        const updatedSubscriptionsArray = allSubscriptions.map((subscription) => {
          if (subscription.id === updatedSubscription.id) {
            return updatedSubscription;
          } else {
            return subscription;
          }
        });
        setAllSubscriptions(updatedSubscriptionsArray);
    }

    const subscriptionRows = allSubscriptions.map((subscription, index) => (
        <Subscription 
            key={subscription.id}
            subscription={subscription}
            onDeleteSubscription={handleDeleteSubscription}
            onUpdateSubscription={handleUpdateSubscription}
        ></Subscription>
    ));

    return (
        <div id="subscription-list-container">
            <table class="center">
                <tr>
                    <th>Number of stocks</th>
                    <th>Stock Price</th>
                    <th>Date</th>
                    <th>Stock ID</th>
                    <th>Owner ID</th>
                    <th>Edit</th>
                </tr>
                {subscriptionRows}
            </table>
            <button onClick={togglePopup}> Add a new subscription {allSubscriptions.name} </button>
            {isOpen && <Popup
                    content={<>
                    <h1>Add Subscription</h1>
                    <NewSubscriptionForm 
                        handleAddSubscription={handleAddSubscription}
                        handleClose={togglePopup}
                    />
                    </>}
                    handleClose={togglePopup}
                />}
        </div>
    );
}

export default SubscriptionList;
