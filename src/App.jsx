import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import "./index.css";

const App = () => {
    return (
        <Router>
            <HomePage /> 
        </Router>  
    );
};

export default App;
