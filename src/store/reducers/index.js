//combine all reducers
import { combineReducers } from "redux";
import cartReducer from "./reducers";

const reducers = combineReducers({
	cart: cartReducer,
});

export default reducers;
