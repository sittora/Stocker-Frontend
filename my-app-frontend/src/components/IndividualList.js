import React, { useState, useEffect } from "react";
import Stock from "./Stock";

function IndividualList({ stockListArray, title, list }) {
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        fetch(`${list}&page=1`)
        .then(r => r.json())
        .then(data => {
            setPage(1);
            setTotalPages(data.total_pages);
            setStocks(stockListArray);
        })
    }, [stockListArray])

    function changePage(type) {
        if(type==="prev") {
            page === 1 ? setPage(totalPages) : setPage(lastPage => lastPage - 1);
            
            fetch(`${list}&page=${page}`)
            .then(r => r.json())
            .then(data => {
                setStocks(data.results);
            })
        }
        if(type==="next") {
            page === totalPages ? setPage(1) : setPage(lastPage => lastPage + 1);
            
            fetch(`${list}&page=${page}`)
            .then(r => r.json())
            .then(data => {
                setStocks(data.results);
            })
        }
    }

    if(title !=="Search Results") {
        return (
            <div id="stock-list-container">
                <h2 id={title}>{title}</h2>
                <div id="stock-list">
                {stocks.map(stock => {
                    return(
                        <Stock key={stock.id} stock={stock}/>
                    )
                })}
                </div>
                <div className="pages">
                    <button className="page-button" onClick={e => changePage("prev")}>{`<`}</button>
                    <p className="page-number">{page}</p>
                    <button className="page-button" onClick={e => changePage("next")}>{`>`}</button>
                </div>
            </div>
        );
    } else if (title === "Search Results") {
        return (
            <div id="stock-list-container">
                <h2 id={title}>{title}</h2>
                <div id="stock-list">
                {stockListArray.map(stock => {
                    return(
                        <Stock key={stock.id} stock={stock}/>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default IndividualList;