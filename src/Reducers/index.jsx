import { combineReducers } from "redux";
import { cliqueReducer } from "./cliqueReducer";
//import { OutroReducer } from "./outroReducer";

export const Reducers = combineReducers ({
    cliqueState: cliqueReducer,
    //outroState: OutroReducer,
})