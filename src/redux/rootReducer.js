import userReducer from "./userReducer"
import { combineReducers } from "redux";
import templateReducer from "./templateReducer";
import detailsReducer from "./detailsReducer";
import {saveReducer} from "./saveReducer";

let rootReducer = combineReducers({
    template: templateReducer,
    user: userReducer,
    details: detailsReducer,
    saveState: saveReducer,
})

export default rootReducer;