import { combineReducers } from "redux";
import { listReducer } from "./listReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
const persistConfig = {
	key: 'root',
	storage,
	whitelist: [list]
};
const rootReducer = combineReducers({
   list: listReducer
   
})
export default persistReducer(persistConfig, rootReducer);