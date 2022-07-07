<<<<<<< HEAD
import {GET_CAT_REQUEST, GET_CAT_SUCCESS, GET_CAT_FAILED} from "./index";
import {getCat} from "../../utils/cat-API";

export function getCatData(value = 20) {
    return function (dispatch) {
        dispatch({type: GET_CAT_REQUEST})
        getCat(value)
            .then(data => {
                dispatch({
                    type: GET_CAT_SUCCESS,
                    cats: data,
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_CAT_FAILED,
                    err: err,
                })
            })
    }
=======
import {GET_CAT_REQUEST, GET_CAT_SUCCESS, GET_CAT_FAILED} from "./index";
import {getCat} from "../../utils/cat-API";

export function getCatData(value = 20) {
    return function (dispatch) {
        dispatch({type: GET_CAT_REQUEST})
        getCat(value)
            .then(data => {
                dispatch({
                    type: GET_CAT_SUCCESS,
                    cats: data,
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_CAT_FAILED,
                    err: err,
                })
            })
    }
>>>>>>> dce69a906b0c0d696eb744df290099e4b9942212
}