import {GET_CAT_REQUEST, GET_CAT_FAILED, GET_CAT_SUCCESS} from "../actions";
import {unique} from "../../utils/unique";

const initialState = {
    cats: [],
    getCatRequest: false,
    getCatFailed: false,
    error: '',
}

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CAT_REQUEST: {
            return {
                ...state,
                getCatRequest: true
            }
        }
        case GET_CAT_SUCCESS: {
            return {
                ...state,
                getCatRequest: false,
                cats: unique([...state.cats, ...action.cats])
            }
        }
        case GET_CAT_FAILED: {
            return {
                ...state,
                getCatRequest: false,
                getCatFailed: true,
                error: action.err
            }
        }
        default: return state
    }
}