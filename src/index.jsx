import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

import { Route, BrowserRouter as Router } from 'react-router-dom'   

const routing = (  
  <Router>  
    <div>  
      <Route exact path="/" component={App} />  
    </div>  
  </Router>  
)  

ReactDOM.render(routing, document.getElementById("root"));
