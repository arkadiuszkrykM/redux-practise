import { FETCH_MOVIES_PENDING, FETCH_MOVIES_FULFILLED, FETCH_MOVIES_REJECTED } from "../consts/Constants";

export const initialState = []




export const moviesReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_MOVIES_FULFILLED:
            return [ ...action.payload ]
        default:
            return state;
    }
}

