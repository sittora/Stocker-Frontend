import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../App.css';
import Header from "./Header";
import Userlist from "./UserList";
import StockList from "./StockList";

function App() {
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
  }, [])


  const ALL_STOCKS = "http://localhost:9292/stocks";
  const ALL_USERS = "http://localhost:9292/users";
  const [allStocks, setAllStocks] = useState([]);
  const [allUsers, setAllUsers] = useState([]);



  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        </BrowserRouter>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div id="spacer"></div>
          <h1>Welcome to Stocker!</h1>
        </Route>
        <Route exact path="/stocks">
        <div id="spacer"></div>
          <StockList title="Stocks" />
        </Route>
        <Route exact path="/users">
        <div id="spacer"></div>
          <Userlist userListArray={allUsers} title="Users" list={ALL_USERS} />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
