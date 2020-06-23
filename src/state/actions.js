import * as actionTypes from './actionTypes'

export function showSnack (props) {
    return (dispatch:Dispatch) => {
        dispatch({
            type:actionTypes.SHOW,
            snackProps: props
        })
        setTimeout(() => {
            dispatch(dismissSnack())
        },5000)
    }
}

export function dismissSnack () {
    return {
        type: actionTypes.DISMISS
    }
}
