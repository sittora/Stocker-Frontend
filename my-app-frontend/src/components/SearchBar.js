import React, {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';

function SearchBar({ setSearchedMovies }) {
    const SEARCH_PATH = "https://api.themoviedb.org/3/search/";
    const [text, setText] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (text !== "") {
            fetch(`${SEARCH_PATH}${text}`)
            .then(resp => resp.json())
            .then(data => setSearchedMovies(data.results))
            history.push(`/search/${text}`);
        } else {
            history.push("/");
        }
    }, [text])
    return(
        <div className="searchbar">
            <input
                value={text}
                type="text"
                id="search"
                placeholder= "Search Stocks"
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;