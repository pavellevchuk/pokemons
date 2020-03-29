import axios from 'axios'

export const apiMiddleware = ({dispatch}) => next => async action => {
    if(action.type !== 'API'){
        next(action);
        return;
    }

    const axiosRes = await axios({
        url: action.url,
        method: 'GET'
    })

    const res = axiosRes.data;

    if (res && action.onSuccess) {
        dispatch(action.onSuccess(res));
    }
    
    return res;
}