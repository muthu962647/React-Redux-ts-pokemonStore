export const POKEMON_LOADING = "LOADING";
export const POKEMON_FAIL = "FAIL";
export const POKEMON_SUCCESS = "SUCCESS";

export type PokenmonType = {
    abilities: PokemonAbility[],
    sprites: PokemonSprites,
    stats: PokemonStat[]
}

export type PokemonAbility = {
    ability : {
        name: "string",
        url: "string"
    }
}

export type PokemonSprites = {
    front_default: string
}

export type PokemonStat = {
    base_stat : number,
    effort: number
}

export interface PokemonLoading{
    type: typeof POKEMON_LOADING
}

export interface PokemonFail{
    type: typeof POKEMON_FAIL
}

export interface PokemonSuccess{
    type: typeof POKEMON_SUCCESS,
    payload: {
        abilities: PokemonAbility[],
        sprites: PokemonSprites,
        stats: PokemonStat
    }
} 

export type PokemonDispatchTypes = PokemonSuccess | PokemonFail | PokemonLoading;