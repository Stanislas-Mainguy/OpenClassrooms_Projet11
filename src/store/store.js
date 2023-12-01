import { configureStore} from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    isSignInPage: false,
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, isAuthenticated: true };
        case 'SIGN_OUT':
            return { ...state, isAuthenticated: false };
        default:
            return state;
    };
};

const store = configureStore({
    reducer: authReducer,
});

export default store;
