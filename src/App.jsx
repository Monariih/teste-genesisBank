import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./Home.jsx";
import Create from "./Create.jsx";
import Update from "./Update.jsx";
import BookDetails from "./BookDetails.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/create" element={<Create />}></Route>
                <Route path="/bookDetails/:id" element={<BookDetails />}></Route>
                <Route path="/edit/:id" element={<Update />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
