import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import BackToTop from "./components/BackToTop/BackToTop.jsx";
import Home from "./Pages/Home.jsx";
import Services from "./Pages/Services.jsx";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />

                {/* Page routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                </Routes>

                <Footer />
                <BackToTop />
            </div>
        </Router>
    );
}

export default App;
