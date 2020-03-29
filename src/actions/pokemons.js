const currentAPI = 'https://pokeapi.co/api/v2';

export const getChunk = (url = '/pokemon/?limit=12') => {
    function onSuccess(data){
        return {
            type: 'SET_CHUNK',
            data
        }
    }

    let currentUrl = url.replace(currentAPI, '');

    return{
        type: 'API',
        url: currentUrl,
        onSuccess
    }
}

export const getPokemon = (url) => {

    return {
        type: 'API',
        url: url.replace(currentAPI, '')
    }
}

export const resetFilter = () => ({
    type:'RESET_FILTER'
})

export const addExtendedData = (data) => ({
    type:'ADD_EXTENDED',
    data
}) 

export const setPokemonInfo = (data) => ({
    type: 'SET_INFO',
    data
})


export const setVisibleInfo = (visible) => ({
    type: 'SET_VISIBLE_INFO',
    visible
})

export const filterPokemons = (type) => ({
    type: 'SET_FILTER',
    filter: type
})