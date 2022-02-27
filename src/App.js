import './App.css';

import SearchMovies from "./searchmovies";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoviesList from "./lists";
import MovieCard from "./card";
import MovieDetail from "./movieDetail";

function App() {
  return (
    <Router>
    
      <Switch>

        <Route path="/detail" component={MovieDetail} />
        <Route path="/" component={SearchMovies} />
        <Route path="/list" component={MoviesList} />
        <Route path="/cards" component={MovieCard} />

      </Switch>
    </Router>
  );
}

export default App;



