import { combineReducers } from "redux";
import { listReducer } from "./listReducer";
import { taskReducer } from "./taskReducer";

export const rootReducer = combineReducers({
   list: listReducer
   
})