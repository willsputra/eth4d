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

var _jsxFileName = '/Users/willsputra/Desktop/projects/eth4d/components/EnterForm.js';


var EnterForm = function (_Component) {
    (0, _inherits3.default)(EnterForm, _Component);

    function EnterForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, EnterForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnterForm.__proto__ || (0, _getPrototypeOf2.default)(EnterForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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

                                console.log(accounts);
                                _context.next = 9;
                                return _lottery2.default.enter({
                                    from: accounts[0],
                                    value: _this.state.value
                                });

                            case 9:
                                _context.next = 14;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 14:

                                _this.setState({ loading: '', value: '' });

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(EnterForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('form', { onSubmit: this.onSubmit, error: !!this.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('input', {
                type: 'text',
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }), _react2.default.createElement('input', { type: 'submit', value: 'Submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, this.state.loading));
        }
    }]);

    return EnterForm;
}(_react.Component);

exports.default = EnterForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW50ZXJGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIndlYjMiLCJsb3R0ZXJ5SW5zdGFuY2UiLCJFbnRlckZvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJlbnRlciIsImZyb20iLCJtZXNzYWdlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQXFCOzs7Ozs7Ozs7SUFFdEIsQTs7Ozs7Ozs7Ozs7Ozs7O3NOQUNGLEE7bUJBQVEsQUFDRyxBQUNQOzBCQUZJLEFBRVUsQUFDZDtxQkFISSxBQUdLLEE7QUFITCxBQUNKLGlCQUtKLEE7aUdBQVcsaUJBQUEsQUFBTSxPQUFOO29CQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFFTjs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLGNBQWMsY0FIaEMsQUFHUCxBQUFjLEFBQXVDOztnREFIOUM7Z0RBQUE7dUNBT29CLGlCQUFBLEFBQUssSUFQekIsQUFPb0IsQUFBUzs7aUNBQTFCO0FBUEgsb0RBUUg7O3dDQUFBLEFBQVEsSUFSTCxBQVFILEFBQVk7Z0RBUlQ7eURBU0csQUFBZ0I7MENBQ1osU0FEa0IsQUFDbEIsQUFBUyxBQUNmOzJDQUFPLE1BQUEsQUFBSyxNQVhiLEFBU0csQUFBc0IsQUFFTjtBQUZNLEFBQ3hCLGlDQURFOztpQ0FUSDtnREFBQTtBQUFBOztpQ0FBQTtnREFBQTtnRUFhQzs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQWIvQixBQWFDLEFBQWMsQUFBb0I7O2lDQUcxQzs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLElBQUksT0FoQnRCLEFBZ0JQLEFBQWMsQUFBc0I7O2lDQWhCN0I7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0FtQkY7eUJBQ0w7O21DQUNJLGNBQUEsVUFBTSxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBeEMsQUFBNkM7OEJBQTdDO2dDQUFBLEFBQ0k7QUFESjthQUFBO3NCQUNJLEFBQ1MsQUFDTDt1QkFBTyxLQUFBLEFBQUssTUFGaEIsQUFFc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLE1BQUEsQUFBTSxPQUF0QyxBQUFTLEFBQWMsQUFBc0I7QUFIM0Q7OzhCQUFBO2dDQURKLEFBQ0ksQUFLQTtBQUxBO0FBQ0kseURBSUcsTUFBUCxBQUFZLFVBQVMsT0FBckIsQUFBMkI7OEJBQTNCO2dDQU5KLEFBTUksQUFDQTtBQURBO2dDQUNBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUk7QUFBSjtBQUFBLG9CQUFJLEFBQUssTUFSakIsQUFDSSxBQU9JLEFBQWUsQUFHMUI7Ozs7O0FBdENtQixBLEFBeUN4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJFbnRlckZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3dpbGxzcHV0cmEvRGVza3RvcC9wcm9qZWN0cy9ldGg0ZCJ9