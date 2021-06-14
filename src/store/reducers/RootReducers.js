import { combineReducers } from "redux";
import MenuReducer from "./MenuReducer";
import userReducer from "./UserReducer";


export const rootReducers = combineReducers({
    menuReducer: MenuReducer,
    userReducer: userReducer
});

// export default rootReducers;