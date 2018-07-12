import axios from 'axios';
import { API_KEY } from '../../constants/APIKEY';
import { FETCH_UPCOMING_FULFILLED } from '../consts/Constants'

const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

export const fetchUpcoming = () => async (dispatch) => {
    const { data: { results  } } = await axios.get(URL);
    return dispatch({
        type: FETCH_UPCOMING_FULFILLED,
        payload: results
    });
}
