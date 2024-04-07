import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Sliders from './Components/Sliders'
import ProductionHouse from './Components/ProductionHouse'
import GenreMovieList from './Components/GenreMovieList'


function App() {
  return (
    <h1>
      <Header></Header>
      <Sliders></Sliders>
      <ProductionHouse></ProductionHouse>
      <GenreMovieList></GenreMovieList>
      
    </h1>
  )
}

export default App
