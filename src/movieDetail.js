import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

// Concepts: props(passing around properties), separate components
export default function MovieDetail () {
    const location = useLocation();
    const {movie} = location.state;
 
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

        </div>
            <Card sx={{ display: 'flex', width:"60%", margin:"auto", marginTop:5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {movie.title} <br/><br/><br/>
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        RELEASE DATE: {movie.release_date} <br/><br/>
                        RATING: {movie.vote_average} <br/><br/>
                        LANGUAGE: {movie.original_language} <br/><br/>
                        {movie.overview}
                    </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    height="400"
                    image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt={`${movie.title} poster`}
                />
            </Card>
        
        </>
    )
}