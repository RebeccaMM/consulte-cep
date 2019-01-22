import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';
const initialState = {
    newValue: ''
};
export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_UPDATE_VALUE:
            return {
                ...state,
                lugar: action.lugar
            };
        default:
            return state;
    }
};