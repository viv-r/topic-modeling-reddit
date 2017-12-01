'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _reactFlipMove = require('react-flip-move');

var _reactFlipMove2 = _interopRequireDefault(_reactFlipMove);

var _JokeItem = require('./JokeItem');

var _JokeItem2 = _interopRequireDefault(_JokeItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\lukew\\Documents\\GitHub\\HCDE556\\HCDE556\\js\\JokeList.js';

var JokeList = function (_React$PureComponent) {
    (0, _inherits3.default)(JokeList, _React$PureComponent);

    function JokeList() {
        (0, _classCallCheck3.default)(this, JokeList);

        return (0, _possibleConstructorReturn3.default)(this, (JokeList.__proto__ || (0, _getPrototypeOf2.default)(JokeList)).apply(this, arguments));
    }

    (0, _createClass3.default)(JokeList, [{
        key: 'renderJoke',
        value: function renderJoke(joke) {
            return _react2.default.createElement(_JokeItem2.default, { key: joke.id, joke: joke, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var filter = (this.props.filter || '').toLowerCase().trim();
            var data = this.props.data.filter(function (d) {
                return (d.title || '').toLowerCase().includes(filter) || (d.body || '').toLowerCase().includes(filter);
            });

            return _react2.default.createElement(_reactFlipMove2.default, { enterAnimation: 'fade', leaveAnimation: 'fade', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, data.map(this.renderJoke));
        }
    }]);

    return JokeList;
}(_react2.default.PureComponent);

exports.default = JokeList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzXFxKb2tlTGlzdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZsaXBNb3ZlIiwiSm9rZUl0ZW0iLCJKb2tlTGlzdCIsImpva2UiLCJpZCIsImZpbHRlciIsInByb3BzIiwidG9Mb3dlckNhc2UiLCJ0cmltIiwiZGF0YSIsImQiLCJ0aXRsZSIsImluY2x1ZGVzIiwiYm9keSIsIm1hcCIsInJlbmRlckpva2UiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFjOzs7Ozs7OztJQUVBLEE7Ozs7Ozs7Ozs7O21DQUNOLEEsTUFBTSxBQUNiO21DQUFPLEFBQUMsb0NBQVMsS0FBSyxLQUFmLEFBQW9CLElBQUksTUFBeEIsQUFBOEI7OEJBQTlCO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBR0YsQUFDTDtnQkFBTSxTQUFTLENBQUMsS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFaLEFBQXNCLElBQXRCLEFBQTBCLGNBQXpDLEFBQWUsQUFBd0MsQUFDdkQ7Z0JBQU0sWUFBTyxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLE9BQU8sYUFBQTt1QkFDaEMsQ0FBQyxFQUFBLEFBQUUsU0FBSCxBQUFZLElBQVosQUFBZ0IsY0FBaEIsQUFBOEIsU0FBOUIsQUFBdUMsV0FDdkMsQ0FBQyxFQUFBLEFBQUUsUUFBSCxBQUFXLElBQVgsQUFBZSxjQUFmLEFBQTZCLFNBRkcsQUFFaEMsQUFBc0M7QUFGMUMsQUFBYSxBQUtiLGFBTGE7O21DQU1ULEFBQUMseUNBQVMsZ0JBQVYsQUFBeUIsUUFBTyxnQkFBaEMsQUFBK0M7OEJBQS9DO2dDQUFBLEFBQ0s7QUFETDthQUFBLE9BQ0ssQUFBSyxJQUFJLEtBRmxCLEFBQ0ksQUFDSyxBQUFjLEFBRzFCOzs7OztFQWpCaUMsZ0JBQU0sQTs7a0JBQXZCLEEiLCJmaWxlIjoiSm9rZUxpc3QuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbHVrZXcvRG9jdW1lbnRzL0dpdEh1Yi9IQ0RFNTU2L0hDREU1NTYifQ==