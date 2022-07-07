<<<<<<< HEAD
import {ADD_TO_FAV, REMOVE_FROM_FAV} from "../actions";

const initialState = {
     favCats: [],
 }
export const favReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAV: {
            return {
                ...state,
                favCats: [...state.favCats, action.payload]
            }
        }
        case REMOVE_FROM_FAV: {
            return {
                ...state,
                favCats: [...state.favCats.filter(cat => cat.id !== action.payload.id)]
            }
        }
        default: return state
    }
=======
import {ADD_TO_FAV, REMOVE_FROM_FAV} from "../actions";

const initialState = {
     favCats: [],
 }
export const favReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAV: {
            return {
                ...state,
                favCats: [...state.favCats, action.payload]
            }
        }
        case REMOVE_FROM_FAV: {
            return {
                ...state,
                favCats: [...state.favCats.filter(cat => cat.id !== action.payload.id)]
            }
        }
        default: return state
    }
>>>>>>> dce69a906b0c0d696eb744df290099e4b9942212
}