import { USER_SELECTED_VOTES, USER_SELECTED_DATES } from '../consts/Constants';

export const widgetUserSelection = data => dispatch => {
    return data.match(/\-/g) ?
    (
        dispatch({
            type: USER_SELECTED_DATES,
            payload: data
        })
    ) : (
        dispatch({
            type: USER_SELECTED_VOTES,
            payload: data
        })
    );
}
