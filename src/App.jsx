import Home from "./Pages/Home.jsx";
import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Home />
            </div>
        </Router>
    );
}

export default App;
