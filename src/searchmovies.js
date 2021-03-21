import React, {useState} from "react";
import MovieCard from "./card.js";

// Concepts: Fetch(from an API, getting an API key), hooks(useState), asynchronous JS(async await) 
export default function SearchMovies() {

    //states = input query, movies
    const [query, setQuery] = useState('');

    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=8752db6ca168ae4b1865aeac42f13afc&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        } catch(err) {
            console.error(err);
        }

    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query" className="label"> Movie Name</label>
                <input className="input" type="text" placeholder="Search for a movie" name="query"
                value={query} onChange={(e) => setQuery(e.target.value)}/>
                <button className="button" type="submit">Search</button>
            </form> 
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id}/> 
                ))}
            </div>
        </>
    )
}