import { useEffect, useState } from 'react'
import './styles.css'
import Header from './components/Header'
import Imagen from './components/Imagen'
import Info from './components/Info'
import Descripcion from './components/descripcion'
import EstadisticasBasicas from './components/EstadisticasBasicas'



function App() {

  return (
    <>
      <div className="card">
        <Header name ="Oshawott" id="501"/>
        <Imagen ImagenURL ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png"
        name ="Oshawott" />
        <div className="poke-info">
          <Info/>
          <Descripcion />
          <EstadisticasBasicas/>
        </div>
      </div>   
    </>
  )
}

export default App
