import React from "react";

function Backend() {

    const getUsers = () => {
        fetch("http://localhost:9292/users")
        .then(resp => resp.json())
        .then(data => console.log(data))
    }


      const getUser = (id) => {
        fetch(`http://localhost:9292/users/${id}`)
        .then(resp => resp.json())
        .then(user => console.log(user))
  
  
    }    

      const createUser = (formData) => {
    
        const {name, email, password} = formData
        const user = {
          name,
          email,
          password
    
        }
    
        const configObj = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
    
        }
        fetch("http://localhost:9292/users", configObj)
        .then(resp => resp.json())
        .then(user => console.log(user))
         
        }  

        const updateUser = (formData, userId) => {
    
            const {name, email, password} = formData
            const user = {
              name,
              email,
              password
        
            }
        
            const configObj = {
              method: "PATCH",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
        
            }

            fetch(`http://localhost:9292/users/${userId}`, configObj)
            .then(resp => resp.json())
            .then(user => console.log(user))
             
        }

        const deleteUser = (userId) => {
            fetch(`http://localhost:9292/users/${userId}`, 
            {method: "DELETE"})
    
        }

    

    const getStocks = () => { 
        fetch("http://localhost:9292/stocks")
        .then(resp => resp.json())
        .then(data => console.log(data))
    }


      const getStock = (id) => {
        fetch(`http://localhost:9292/stocks/${id}`)
        .then(resp => resp.json())
        .then(stock => console.log(stock))
  
  
    }    

    const createStock = (formData) => {
    
        const {name, price, total_stock, ticker_tag} = formData
        const stock = {
          name,
          price,
          total_stock,
          ticker_tag
    
        }
    
        const configObj = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(stock)
    
        }
        fetch("http://localhost:9292/stocks", configObj)
        .then(resp => resp.json())
        .then(stock => console.log(stock))
         
      }  

      const updateStock = (formData, id) => {
    
        const {name, price, total_stock, ticker_tag} = formData
        const stock = {
          name,
          price,
          total_stock,
          ticker_tag
    
        }
    
        const configObj = {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(stock)
    
        }

        fetch(`http://localhost:9292/stocks/${id}`, configObj)
        .then(resp => resp.json())
        .then(stock => console.log(stock))
         
    }

      const deleteStock = (stockId) => {
            fetch(`http://localhost:9292/stocks/${stockId}`, 
            {method: "DELETE"})
    
      } 
    
      const getSubscriptions = () => { 
        fetch("http://localhost:9292/subscriptions")
        .then(resp => resp.json())
        .then(data => console.log(data))
    }


      const getSubscription = (id) => {
        fetch(`http://localhost:9292/subscriptions/${id}`)
        .then(resp => resp.json())
        .then(subscription => console.log(subscription))
  
  
    }    

    const createSubscription = (formData) => {
    
        const {number_of_stocks, stock_price, date} = formData
        const subscription = {
          number_of_stocks,
          stock_price,
          date,
    
        }
    
        const configObj = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(subscription)
    
        }
        fetch("http://localhost:9292/subscriptions", configObj)
        .then(resp => resp.json())
        .then(subscription => console.log(subscription))
         
      }  

      const updateSubscription = (formData, id) => {
    
        const {number_of_stocks, stock_price, date} = formData
        const subscription = {
          number_of_stocks,
          stock_price,
          date,
    
        }
    
        const configObj = {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(subscription)
    
        }

        fetch(`http://localhost:9292/subscriptions/${id}`, configObj)
        .then(resp => resp.json())
        .then(stock => console.log(stock))
         
    }

      const deleteSubscription = (subId) => {
            fetch(`http://localhost:9292/subscriptions/${subId}`, 
            {method: "DELETE"})
    
      } 
    
      return (
        <div></div>
    )
    

   
}


export default Backend
