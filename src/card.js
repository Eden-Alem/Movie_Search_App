import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Link } from "react-router-dom";

// Concepts: props(passing around properties), separate components
export default function MovieCard ({ movie }) {
 
    return (

        <>        
             <Card sx={{ width: 345, margin:2}}>
                <CardMedia
                    component="img"
                    height="300"
                    image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt={`${movie.title} poster`}
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.title} <br/>                

                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        RELEASE DATE: {movie.release_date} <br/>
                        RATING: {movie.vote_average} <br/><br/>
                    </Typography>
                    <Link to={{pathname:"/detail", state:{movie: movie}}}>
                        <button className="button" style={{maxWidth:"200px", borderRadius:"5px"}} type="submit" >Detail</button>
                    </Link>
                </CardContent>
            </Card>
        </>
    )
}