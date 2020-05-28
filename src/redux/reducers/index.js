import { combineReducers } from 'redux';

import fetchBookReducer from './Books/fetchBookReducer';

const appReducer = combineReducers({
    fetchBookReducer
});

const rootReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === 'USER_LOGGED_OUT') {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;