import userReducer from "./userReducer"
import { combineReducers } from "redux";
import templateReducer from "./templateReducer";
import detailsReducer from "./detailsReducer";

let rootReducer = combineReducers({
    template: templateReducer,
    user: userReducer,
    details: detailsReducer,
})

export default rootReducer;