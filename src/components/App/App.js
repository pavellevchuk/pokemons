import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

import PokemonsContainer from '../PokemonsContainer'

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>Pokedex</h1>
        <PokemonsContainer/>
      </div>
    </div>
  );
}

export default App;
