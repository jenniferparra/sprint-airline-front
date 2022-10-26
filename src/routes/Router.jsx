import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Flights from "../components/flights/Flights";

// import Header from "../components/header/Header";
import Home from "../components/home/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="flights" element={<Flights />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;