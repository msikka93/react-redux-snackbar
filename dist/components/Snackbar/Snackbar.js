'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../../state/actions');

var snackbarActions = _interopRequireWildcard(_actions);

var _Alert = require('@material-ui/lab/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _Snackbar = require('@material-ui/core/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Alert(props) {
  return _react2.default.createElement(_Alert2.default, _extends({ elevation: 6, variant: 'filled' }, props));
}

var SnackbarContainer = function (_Component) {
  _inherits(SnackbarContainer, _Component);

  function SnackbarContainer() {
    _classCallCheck(this, SnackbarContainer);

    return _possibleConstructorReturn(this, (SnackbarContainer.__proto__ || Object.getPrototypeOf(SnackbarContainer)).apply(this, arguments));
  }

  _createClass(SnackbarContainer, [{
    key: 'render',
    value: function render() {
      if (!this.props.open) return null;

      return _react2.default.createElement(
        _Snackbar2.default,
        { open: this.props.open, autoHideDuration: 6000, onClose: this.props.dismissSnack },
        _react2.default.createElement(
          Alert,
          { onClose: this.props.dismissSnack, severity: this.props.type },
          this.props.message
        )
      );
    }
  }]);

  return SnackbarContainer;
}(_react.Component);

function mapStateToProps(state, ownProps) {
  var Alert = state.Alert;

  return {
    open: Alert.open,
    type: Alert.snackProps.type,
    onClose: Alert.snackProps.onClose,
    message: Alert.snackProps.message
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dismissSnack: function dismissSnack() {
      return dispatch(snackbarActions.dismissSnack());
    }
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SnackbarContainer);