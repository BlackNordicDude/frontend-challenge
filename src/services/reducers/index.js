import {cardReducer} from "./card";
import {combineReducers} from 'redux';
import {favReducer} from "./fav";

export const rootReducer = combineReducers({
    card: cardReducer,
    fav: favReducer,
})