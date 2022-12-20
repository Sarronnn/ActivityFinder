import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";


export default function App() {
  const [favorites,setFavorites]=useState([])
return(
  <div>
      <Routes>
      
      <Route path="/favorites" element={<Favorites favorites={favorites} />} />
      <Route path="/" element={<Home setFavorites={setFavorites} />} />
      
</Routes>
    </div>
  );
}
