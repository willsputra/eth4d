'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getWeb = require('./getWeb3');

var _getWeb2 = _interopRequireDefault(_getWeb);

var _Lottery = require('../../build/contracts/Lottery.json');

var _Lottery2 = _interopRequireDefault(_Lottery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contract = require('truffle-contract');
var lottery = contract(_Lottery2.default);
lottery.setProvider(_getWeb2.default.currentProvider);

var lotteryInstance = lottery.at('0x8d08ef724dfba934380dfbefeb856927bedaa144');

exports.default = lotteryInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9saWIvbG90dGVyeS5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiTG90dGVyeSIsImNvbnRyYWN0IiwicmVxdWlyZSIsImxvdHRlcnkiLCJzZXRQcm92aWRlciIsImN1cnJlbnRQcm92aWRlciIsImxvdHRlcnlJbnN0YW5jZSIsImF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBb0IsQUFBcEI7Ozs7OztBQUdBLElBQU0sV0FBVyxBQUFYLEFBQU47QUFDQSxJQUFNLFVBQVUsQUFBUyxBQUFULEFBQWhCO0FBQ0EsUUFBUSxBQUFSLFlBQW9CLGlCQUFLLEFBQXpCOztBQUVBLElBQU0sa0JBQWtCLFFBQVEsQUFBUixHQUFXLEFBQVgsQUFBeEIsQUFFQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJsb3R0ZXJ5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93aWxsc3B1dHJhL0Rlc2t0b3AvcHJvamVjdHMvZXRoNGQifQ==