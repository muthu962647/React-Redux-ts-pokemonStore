import { combineReducers } from "redux";
import pokemonReducers from "./pokemonReducers";

const reducers = combineReducers({
    pokemon: pokemonReducers
})

export default reducers;