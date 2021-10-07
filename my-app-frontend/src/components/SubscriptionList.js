import React, { useState, useEffect } from "react";
import Subscription from "./Subscription";

function SubscriptionList({ title }) {
    useEffect(() => {
        // need this path to exist
        fetch("http://localhost:9292/subscriptions")
          .then((r) => r.json())
          .then((data) => {
            setAllSubscriptions(data);
          });   
      }, [])

      const [allSubscriptions, setAllSubscriptions] = useState([]);

    const subscriptionRows = allSubscriptions.map((subscription, index) => (
            <tr key={subscription.id}>
                <td>{subscription.name}</td>
                <td>{subscription.ticker_tag}</td>
                <td>{subscription.price}</td>
                <td>{subscription.total_stock}</td>
            </tr>
        ));
    return (
        <div id="subscription-list-container">
            <table class="center">
                <tr>
                    <th>Name</th>
                    <th>Ticker Tag</th>
                    <th>Price</th>
                    <th>Total Stock</th>
                </tr>
                {subscriptionRows}
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

export default SubscriptionList;