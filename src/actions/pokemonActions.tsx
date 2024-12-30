import { Dispatch } from "redux";
import { PokemonSuccess, PokemonFail, POKEMON_LOADING, PokemonDispatchTypes,  POKEMON_SUCCESS, POKEMON_FAIL } from "./PokemonActionTypes";
import axios from "axios";

export const GetPokemon = (pokemon: string) => async(dispatch: Dispatch<PokemonDispatchTypes>) => {
    try{
        dispatch({
            type: POKEMON_LOADING
        })

        const res = await axios.get(`https://pokeapi.co/api/v2/${pokemon}`);

        dispatch({
            type: POKEMON_SUCCESS,
            payload: res.data
        })

    }catch(e){
        dispatch({
            type: POKEMON_FAIL
        })
    }
};