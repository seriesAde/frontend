import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css';
import {Routes, Route} from "react-router-dom"
import MovieCard from './componets/moviecard'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './componets/Navbar';


function App() {

  return (
  <div> 
    <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </main>
  </div>
  );
}


export default App
