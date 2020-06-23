'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case actionTypes.SHOW:
            return Object.assign({}, state, {
                snackProps: Object.assign({}, initialState.snackProps, action.snackProps),
                open: true
            });
        case actionTypes.DISMISS:
            return Object.assign({}, state, { snackProps: {}, open: false });
        default:
            return state;
    }
};

var _actionTypes = require('./actionTypes');

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
    open: false,
    snackProps: {
        type: 'info',
        onClose: function onClose() {},
        message: ''
    }
};