import React from 'react'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/about';
import Books from './components/books';
import Home from './components/home';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/books" element={<Books/>}></Route>
       
      </Routes>
    </Router>



  );
}


export default App;
