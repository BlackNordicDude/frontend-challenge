<<<<<<< HEAD
import {cardReducer} from "./card";
import {combineReducers} from 'redux';
import {favReducer} from "./fav";

export const rootReducer = combineReducers({
    card: cardReducer,
    fav: favReducer,
=======
import {cardReducer} from "./card";
import {combineReducers} from 'redux';
import {favReducer} from "./fav";

export const rootReducer = combineReducers({
    card: cardReducer,
    fav: favReducer,
>>>>>>> dce69a906b0c0d696eb744df290099e4b9942212
})