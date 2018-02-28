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

var _lottery = require('../client/lib/lottery');

var _lottery2 = _interopRequireDefault(_lottery);

var _EnterForm = require('../components/EnterForm');

var _EnterForm2 = _interopRequireDefault(_EnterForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/willsputra/Desktop/projects/eth4d/pages/index.js?entry';


var LotteryIndex = function (_Component) {
    (0, _inherits3.default)(LotteryIndex, _Component);

    function LotteryIndex(props) {
        (0, _classCallCheck3.default)(this, LotteryIndex);

        var _this = (0, _possibleConstructorReturn3.default)(this, (LotteryIndex.__proto__ || (0, _getPrototypeOf2.default)(LotteryIndex)).call(this, props));

        _this.state = {
            totalBalance: 0,
            manager: ''
        };
        return _this;
    }

    (0, _createClass3.default)(LotteryIndex, [{
        key: 'componentDidMount',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var totalBalance, manager;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _lottery2.default.totalBalance();

                            case 2:
                                totalBalance = _context.sent;
                                _context.next = 5;
                                return _lottery2.default.manager();

                            case 5:
                                manager = _context.sent;

                                console.log(_lottery2.default);
                                console.log(totalBalance);

                                this.setState({
                                    totalBalance: totalBalance.c[0],
                                    manager: manager
                                });

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidMount() {
                return _ref.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, this.state.totalBalance), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, this.state.manager), _react2.default.createElement(_EnterForm2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }));
        }
    }]);

    return LotteryIndex;
}(_react.Component);

exports.default = LotteryIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImxvdHRlcnlJbnN0YW5jZSIsIkVudGVyRm9ybSIsIkxvdHRlcnlJbmRleCIsInByb3BzIiwic3RhdGUiLCJ0b3RhbEJhbGFuY2UiLCJtYW5hZ2VyIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFPLEFBQXFCOzs7O0FBQzVCLEFBQU8sQUFBZTs7Ozs7Ozs7O0ksQUFFaEI7MENBRUY7OzBCQUFBLEFBQVksT0FBTzs0Q0FBQTs7c0pBQUEsQUFDVCxBQUVOOztjQUFBLEFBQUs7MEJBQVEsQUFDSyxBQUNkO3FCQUxXLEFBR2YsQUFBYSxBQUVBO0FBRkEsQUFDVDtlQUdQOzs7Ozs7Ozs7Ozs7O3VDQUk4QixrQkFBQSxBLEFBQWdCOztpQ0FBckM7QTs7dUNBQ2dCLGtCLEFBQUEsQUFBZ0I7O2lDQUFoQztBLG1EQUNOOzt3Q0FBQSxBQUFRLEFBQUksQUFDWjt3Q0FBQSxBQUFRLElBQVIsQUFBWSxBQUVaOztxQ0FBQSxBQUFLO2tEQUNhLGFBQUEsQUFBYSxFQURqQixBQUNJLEFBQWUsQUFDN0I7NkNBRkosQUFBYyxBQUVEO0FBRkMsQUFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUtDLEFBQ0w7bUNBRUEsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSxvQkFBSSxBQUFLLE1BRGIsQUFDSSxBQUFlLEFBQ2YsK0JBQUEsY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSTtBQUFKO0FBQUEsb0JBQUksQUFBSyxNQUZiLEFBRUksQUFBZSxBQUNmLDBCQUFBLEFBQUM7OzhCQUFEO2dDQUxKLEFBRUEsQUFHSSxBQUdGO0FBSEU7QUFBQTs7Ozs7QUE5QmUsQSxBQW9DM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3dpbGxzcHV0cmEvRGVza3RvcC9wcm9qZWN0cy9ldGg0ZCJ9