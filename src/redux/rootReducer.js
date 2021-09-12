import userReducer from "./userReducer"
import { combineReducers } from "redux";
import templateReducer from "./templateReducer";

let rootReducer = combineReducers({
    template: templateReducer,
    user: userReducer,
})

export default rootReducer;