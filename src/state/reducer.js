import * as actionTypes from './actionTypes'

const initialState = {
    open: false,
    snackProps: {
        type: 'info',
        onClose: () => {},
        message: ''
    }
}

export default function(state = initialState, action= {}){
    switch(action.type){
        case actionTypes.SHOW:
            return Object.assign({},state,{
                snackProps:Object.assign({}, initialState.snackProps, action.snackProps),
                open: true
            })
        case actionTypes.DISMISS:
            return Object.assign({}, state, {snackProps: {}, open: false})   
        default:
            return state 
    }
}