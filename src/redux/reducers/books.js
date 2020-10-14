import {SET_BOOKS} from '../actions/actionType.js';

const initialState = {
    books : [],
    loading: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                books: action.payload,
                loading: false
            }
        default:
            return state;
    }
}