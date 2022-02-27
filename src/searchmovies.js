import React, {useState} from "react";
import MovieCard from "./card.js";
import MoviesList from './lists';
import Box from '@mui/material/Box'


// Concepts: Fetch(from an API, getting an API key), hooks(useState), asynchronous JS(async await) 
export default function SearchMovies() {

    //states = input query, movies, isLoaded
    const [query, setQuery] = useState('');

    const [isLoaded, setisLoaded] = useState(true);

    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=8752db6ca168ae4b1865aeac42f13afc&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
            setisLoaded(false);
        } catch(err) {
            console.error(err);
        }

    }

    return (
        <>
            <div 
            style={{
                width:"100%", height:"200px", alignItems:"center", justifyContent:"center", display:"flex", flexDirection:"column",
                backgroundImage:`url(https://images.unsplash.com/photo-1543840950-89196ec9923b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fG1vdmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"}}>
                <h1>Filega Movie Search App</h1>

                <form className="form" onSubmit={searchMovies} style={{width:"80%"}}>
                    <label htmlFor="query" className="label"> </label>
                    <input className="input" style={{borderColor:"white"}} type="text" placeholder="Search for a movie" name="query"
                    value={query} onChange={(e) => setQuery(e.target.value)}/>
                    <button className="button" style={{maxWidth:"200px"}} type="submit">Search</button>
                </form> 
            </div>
            

            {isLoaded  ? <MoviesList/> :
            <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent='space-evenly'>
                {query !== "" ? 
                movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id}/> 
                )): 
                setisLoaded(true)}
            </Box> }

        </>
    )
}