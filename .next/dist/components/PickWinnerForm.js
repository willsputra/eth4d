'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getWeb = require('../client/lib/getWeb3');

var _getWeb2 = _interopRequireDefault(_getWeb);

var _lottery = require('../client/lib/lottery');

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