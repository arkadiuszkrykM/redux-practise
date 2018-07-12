import axios from 'axios';
import { API_KEY } from '../../constants/APIKEY';
import { FETCH_MOSTPOPULAR_FULFILLED } from '../consts/Constants'

const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const fetchMostPopular = () => async (dispatch) => {
    const { data: { results  } } = await axios.get(URL);
    return dispatch({
        type: FETCH_MOSTPOPULAR_FULFILLED,
        payload: results
    });
}
