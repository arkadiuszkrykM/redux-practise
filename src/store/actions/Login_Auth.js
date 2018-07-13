import { IS_USER_AUTH } from '../consts/Constants';

export const userAuth = () => dispatch => {
    return dispatch({
        type: IS_USER_AUTH,
        payload: true
    })
}
