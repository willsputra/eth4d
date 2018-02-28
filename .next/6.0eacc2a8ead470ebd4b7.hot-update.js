webpackHotUpdate(6,{

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _getWeb = __webpack_require__(483);

var _getWeb2 = _interopRequireDefault(_getWeb);

var _lottery = __webpack_require__(482);

var _lottery2 = _interopRequireDefault(_lottery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/willsputra/Desktop/projects/eth4d/components/PickWinnerForm.js';


var PickWinnerForm = function (_Component) {
    (0, _inherits3.default)(PickWinnerForm, _Component);

    function PickWinnerForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, PickWinnerForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PickWinnerForm.__proto__ || (0, _getPrototypeOf2.default)(PickWinnerForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            errorMessage: '',
            loading: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _this.setState({ loading: 'Loading...', errorMessage: '' });

                                _context.prev = 2;
                                _context.next = 5;
                                return _getWeb2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _lottery2.default.pickWinner(_this.state.value, {
                                    from: accounts[0]
                                });

                            case 8:
                                _context.next = 13;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 13:

                                _this.setState({ loading: '', value: '' });

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 10]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(PickWinnerForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('form', { onSubmit: this.onSubmit, error: !!this.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('input', {
                type: 'text',
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }), _react2.default.createElement('input', { type: 'submit', value: 'Submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, this.state.loading));
        }
    }]);

    return PickWinnerForm;
}(_react.Component);

exports.default = PickWinnerForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGlja1dpbm5lckZvcm0uanMiXSwibmFtZXMiOlsiQ29tcG9uZW50Iiwid2ViMyIsImxvdHRlcnlJbnN0YW5jZSIsIlBpY2tXaW5uZXJGb3JtIiwic3RhdGUiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJwaWNrV2lubmVyIiwiZnJvbSIsIm1lc3NhZ2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7O0FBQ1QsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBcUI7Ozs7Ozs7OztJQUV0QixBOzs7Ozs7Ozs7Ozs7Ozs7Z09BQ0YsQTttQkFBUSxBQUNHLEFBQ1A7MEJBRkksQUFFVSxBQUNkO3FCQUhJLEFBR0ssQTtBQUhMLEFBQ0osaUIsQUFLSjtpR0FBVyxpQkFBQSxBQUFNLE9BQU47b0JBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBQUEsQUFBTSxBQUVOOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsY0FBYyxjQUhoQyxBQUdQLEFBQWMsQUFBdUM7O2dEQUg5QztnREFBQTt1Q0FPb0IsaUJBQUEsQUFBSyxJQVB6QixBQU9vQixBQUFTOztpQ0FBMUI7QUFQSCxvREFBQTtnREFBQTt5REFRRyxBQUFnQixXQUFXLE1BQUEsQUFBSyxNQUFoQyxBQUFzQzswQ0FDbEMsU0FUUCxBQVFHLEFBQTZDLEFBQ3pDLEFBQVM7QUFEZ0MsQUFDL0MsaUNBREU7O2lDQVJIO2dEQUFBO0FBQUE7O2lDQUFBO2dEQUFBO2dFQVdDOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBWC9CLEFBV0MsQUFBYyxBQUFvQjs7aUNBRzFDOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsSUFBSSxPQWR0QixBQWNQLEFBQWMsQUFBc0I7O2lDQWQ3QjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQWlCRjt5QkFDTDs7bUNBQ0ksY0FBQSxVQUFNLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUF4QyxBQUE2Qzs4QkFBN0M7Z0NBQUEsQUFDSTtBQURKO2FBQUE7c0JBQ0ksQUFDUyxBQUNMO3VCQUFPLEtBQUEsQUFBSyxNQUZoQixBQUVzQixBQUNsQjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sTUFBQSxBQUFNLE9BQXRDLEFBQVMsQUFBYyxBQUFzQjtBQUgzRDs7OEJBQUE7Z0NBREosQUFDSSxBQUtBO0FBTEE7QUFDSSx5REFJRyxNQUFQLEFBQVksVUFBUyxPQUFyQixBQUEyQjs4QkFBM0I7Z0NBTkosQUFNSSxBQUNBO0FBREE7Z0NBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSTtBQUFKO0FBQUEsb0JBQUksQUFBSyxNQVJqQixBQUNJLEFBT0ksQUFBZSxBQUcxQjs7Ozs7QUFwQ3dCLEEsQUF1QzdCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlBpY2tXaW5uZXJGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93aWxsc3B1dHJhL0Rlc2t0b3AvcHJvamVjdHMvZXRoNGQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/willsputra/Desktop/projects/eth4d/components/PickWinnerForm.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/willsputra/Desktop/projects/eth4d/components/PickWinnerForm.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4wZWFjYzJhOGVhZDQ3MGViZDRiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QaWNrV2lubmVyRm9ybS5qcz9lMjJlZjU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vY2xpZW50L2xpYi9nZXRXZWIzJ1xuaW1wb3J0IGxvdHRlcnlJbnN0YW5jZSBmcm9tICcuLi9jbGllbnQvbGliL2xvdHRlcnknXG5cbmNsYXNzIFBpY2tXaW5uZXJGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBlcnJvck1lc3NhZ2U6ICcnLFxuICAgICAgICBsb2FkaW5nOiAnJ1xuICAgIH1cblxuICAgIG9uU3VibWl0ID0gYXN5bmMgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiAnTG9hZGluZy4uLicsIGVycm9yTWVzc2FnZTogJyd9KVxuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKVxuICAgICAgICAgICAgYXdhaXQgbG90dGVyeUluc3RhbmNlLnBpY2tXaW5uZXIodGhpcy5zdGF0ZS52YWx1ZSwge1xuICAgICAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXG4gICAgICAgICAgICB9KX0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6ICcnLCB2YWx1ZTogJycgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9eyEhdGhpcy5lcnJvck1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3N1Ym1pdCcgdmFsdWU9J1N1Ym1pdCcvPlxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmxvYWRpbmd9PC9wPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQaWNrV2lubmVyRm9ybVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUGlja1dpbm5lckZvcm0uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBOztBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFKQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBUEE7QUFBQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBVkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBV0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQWZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFIQTs7QUFBQTtBQUtBO0FBTEE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==