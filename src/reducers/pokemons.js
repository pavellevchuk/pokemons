const initialState = {
    data: [],
    extendedData: [],
    filteredData: [],
    next: null,
    filter: null,
}

const filterByType = (pokemons, filter) => {
    let filtered = pokemons.filter(pokemon => {
        let foundTypeIndex = pokemon.types.findIndex(type => type.type.name === filter)
        if(foundTypeIndex !== -1){
            return true;
        }
        return false;
    })

    return filtered
}

export const pokemonsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_CHUNK':
            return {
                ...state,
                data: state.data.concat(action.data.results),
                next: action.data.next 
            }
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.filter,
                filteredData: filterByType(state.extendedData, action.filter)
            }
        case 'RESET_FILTER':
            return {
                ...state,
                filteredData: []
            }
        case 'ADD_EXTENDED':
            return {
                ...state,
                extendedData: action.data
            }
        
        default:
            return state;
    }
}