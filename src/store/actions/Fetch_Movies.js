import axios from 'axios';
import { API_KEY } from '../../constants/APIKEY';
import { FETCH_MOVIES_PENDING, FETCH_MOVIES_FULFILLED, FETCH_MOVIES_REJECTED } from '../consts/Constants'


const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const fetchMovies = () => async (dispatch) => {
    const { data: { results  } } = await axios.get(URL);
    return dispatch({
        type: FETCH_MOVIES_FULFILLED,
        payload: results
    })
    // try {
    //    return dispatch({
    //         type: FETCH_MOVIES_PENDING
    //     });
    //    return dispatch({
    //         type: FETCH_MOVIES_FULFILLED,
    //         payload: results
    //     });
    // } catch (error) {
    //     return dispatch({
    //         type: FETCH_MOVIES_REJECTED,
    //         error
    //     })
    // }
}
