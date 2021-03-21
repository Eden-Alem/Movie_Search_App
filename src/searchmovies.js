import React from "react";

export default function SearchMovies() {
    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("Submitting");

        const query = "Jurassic Park";

        const url = `https://api.themoviedb.org/3/movie/550?api_key=8752db6ca168ae4b1865aeac42f13afc&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        } catch(err) {
            console.error(err);
        }

    }

    return (
       <form className="form" onSubmit={searchMovies}>
           <label htmlFor="query" className="label"> Movie Name</label>
           <input className="input" type="text" placeholder="Search for a movie" name="query"/>
           <button className="button" type="submit">Search</button>
       </form> 
    )
}