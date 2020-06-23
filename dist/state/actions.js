'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showSnack = showSnack;
exports.dismissSnack = dismissSnack;

var _actionTypes = require('./actionTypes');

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function showSnack(props) {
    return function (dispatch) {
        dispatch({
            type: actionTypes.SHOW,
            snackProps: props
        });
        setTimeout(function () {
            dispatch(dismissSnack());
        }, 5000);
    };
}

function dismissSnack() {
    return {
        type: actionTypes.DISMISS
    };
}