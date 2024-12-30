import { POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS, PokenmonType } from "../../actions/PokemonActionTypes"

type DefaultStateI =  {
    loading: boolean,
    pokemon?: PokenmonType
}

const initialState: DefaultStateI = {
    loading: false
}


const pokemonReducers = (state: DefaultStateI = initialState, action){
    switch(action.type){

        case POKEMON_LOADING:
            return {
                loading: true
            }
        case POKEMON_FAIL:
            return {
                loading: false
            }
        case POKEMON_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload
            }
    }
}

export default pokemonReducers;