import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
// import "./styles/styles.scss";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
// import MovieInfo from './components/MovieInfo'  

const routing = (  
  <Router>  
    <div>  
      <Route exact path="/" component={App} />  
      {/* <Route path="/movie/:id" component={MovieInfo} />    */}
    </div>  
  </Router>  
)  

ReactDOM.render(routing, document.getElementById("root"));
