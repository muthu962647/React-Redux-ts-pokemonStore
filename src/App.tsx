import React, { useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { RootStore } from './state/store';
import { useDispatch } from 'react-redux';
import { GetPokemon } from './actions/pokemonActions';

function App() {

  const dispatch = useDispatch();

  const [pokemonName, setPokemonName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value)
  } 

  const handleSubmit = () => dispatch(GetPokemon(pokemonName));

  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  return (
    <div className="App">
       <input type="text" onChange= {handleChange}/>
       <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default App;
