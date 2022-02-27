import React, {useState, useEffect } from "react";
import MovieCard from "./card.js";
import Box from '@mui/material/Box'

// Concepts: props(passing around properties), separate components
export default function MoviesList() {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchMovies() {
            const url = `https://api.themoviedb.org/3/discover/movie?api_key=8752db6ca168ae4b1865aeac42f13afc&language=en-US&primary_release_year=2022&sort_by=revenue.desc`;

            try {
                const res = await fetch(url);
                const data = await res.json();
                setMovies(data.results);
                console.log("Loaded");
            } catch(err) {
                console.error(err);
            }
        }
        fetchMovies();

     }, []);


    return (
        <>            
            <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent='space-evenly'>
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id} /> 
                ))}
            </Box>
        </>
    )
 
}