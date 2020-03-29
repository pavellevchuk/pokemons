const initialState = {
    data : null,
    visible : false
}

export const pokemonInfoReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_INFO':
            return  {
                data: action.data,
                visible: !state.visible || !state.data || state.data.id !== action.data.id
            }
        case 'SET_VISIBLE_INFO':
            return{
                ...state,
                visible: action.visible
            }
        default:
            return state;
    }
}