import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../App.css';
import Header from "./Header";
import Userlist from "./UserList";
import StockList from "./StockList";
import Backend from "./Backend";
import SubscriptionList from "./SubscriptionList";

function App() {

  const ALL_STOCKS = "http://localhost:9292/stocks";
  const ALL_USERS = "http://localhost:9292/users";
  const ALL_SUBSCRIPTIONS = "http://localhost:9292/subscriptions";
  const [allStocks, setAllStocks] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allSubscriptions, setAllSubscriptions] = useState([]);


  useEffect(() => {
    // need this path to exist
    fetch("http://localhost:9292/stocks")
      .then((r) => r.json())
      .then((data) => {
        setAllStocks(data);
      });

      fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((data) => {
        setAllUsers(data);
      });

      fetch("http://localhost:9292/subscriptions")
      .then((r) => r.json())
      .then((data) => {
        setAllSubscriptions(data);
      });
  }, [])

  

  function handleDeleteStock(id) {
    const updatedStocksArray = allStocks.filter((stock) => stock.id !== id);
    setAllStocks(updatedStocksArray);
  }

  function handleUpdateStock(updatedStock) {
    const updatedStocksArray = allStocks.map((stock) => {
      if (stock.id === updatedStock.id) {
        return updatedStock;
      } else {
        return stock;
      }
    });
    setAllStocks(updatedStocksArray);
  }

  function handleDeleteSubscription(id) {
    const updatedSubscriptionsArray = allSubscriptions.filter((subscription) => subscription.id !== id);
    setAllSubscriptions(updatedSubscriptionsArray);
  }

  function handleUpdateSubscription(updatedSubscription) {
    const updatedSubscriptionsArray = allStocks.map((subscription) => {
      if (subscription.id === updatedSubscription.id) {
        return updatedSubscription;
      } else {
        return subscription;
      }
    });
    setAllSubscriptions(updatedSubscriptionsArray);
  }

  return (
    <div className="App">
        <Header/>
       
      <Switch>
        <Route exact path="/">
          <div id="spacer"></div>
          <h1>Welcome to Stocker!</h1>
        </Route>
        <Route exact path="/stocks">
        <div id="spacer"></div>
          <StockList 
            title="Stocks"
            onDeleteStock={handleDeleteStock}
            onUpdateStock={handleUpdateStock}
          />
        </Route>
        
        <Route exact path="/users">
        <div id="spacer"></div>
          <Userlist userListArray={allUsers} title="Users" list={ALL_USERS} />
        </Route>

        <Route exact path="/subscriptions">
        <div id="spacer"></div>
          <SubscriptionList 
            title="Subscriptions" 
            onDeleteSubscription={handleDeleteSubscription}
            onUpdateSubscription={handleUpdateSubscription} />
        </Route>
        
        <Route exact path="/backend">
          <Backend/>
        </Route>
        
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
