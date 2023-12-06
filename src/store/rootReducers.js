import { combineReducers } from "redux";
import actionSlice from "./slices/actionSlice";

const rootReducer = combineReducers({
    auth: actionSlice, 
});

export default rootReducer;
