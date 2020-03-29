import { combineReducers } from 'redux'
import { pokemonsReducer } from './pokemons'
import { pokemonInfoReducer } from './pokemonInfo'

export const rootReducer = combineReducers({
    pokemonsReducer,
    pokemonInfoReducer
})
