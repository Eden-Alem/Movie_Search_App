import React from "react";

export default function SearchMovies() {

    return (
       <form className="form">
           <label htmlFor="query" className="label"> Movie Name</label>
           <input className="input" type="text" placeholder="Search for a movie" name="query"/>
           <button className="button" type="submit">Search</button>
       </form> 
    )
}