import React, {useState} from "react";

export default function SearchMovies() {

    //states = input query, movies
    const [query, setQuery] = useState('');

    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        // const query = "Jurassic Park";

        const url = `https://api.themoviedb.org/3/movie/550?api_key=8752db6ca168ae4b1865aeac42f13afc&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            setMovies(data);
        } catch(err) {
            console.error(err);
        }

    }

    return (
       <form className="form" onSubmit={searchMovies}>
           <label htmlFor="query" className="label"> Movie Name</label>
           <input className="input" type="text" placeholder="Search for a movie" name="query"
           value={query} onChange={(e) => setQuery(e.target.value)}/>
           <button className="button" type="submit">Search</button>
       </form> 
    )
}