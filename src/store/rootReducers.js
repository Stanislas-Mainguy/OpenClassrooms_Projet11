import { combineReducers } from "redux";
import authReducer from "./slices/authUsers/";

const rootReducer = combineReducers({
    auth: actionSlice, 
});

export default rootReducer;
