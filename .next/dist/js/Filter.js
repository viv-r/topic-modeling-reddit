"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx\\style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\lukew\\Documents\\GitHub\\HCDE556\\HCDE556\\js\\Filter.js";


var Filter = function (_React$PureComponent) {
    (0, _inherits3.default)(Filter, _React$PureComponent);

    function Filter() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Filter);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Filter.__proto__ || (0, _getPrototypeOf2.default)(Filter)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (e) {
            _this.props.onChange(e.target.value);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Filter, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", {
                className: "jsx-1901052929",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, _react2.default.createElement(_style2.default, {
                styleId: "1901052929",
                css: ".jsx-1901052929{padding:5px;width:calc(100% - 10px);}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzXFxGaWx0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUzZCLEFBRWlDLFlBQ1ksd0JBQzVCIiwiZmlsZSI6ImpzXFxGaWx0ZXIuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbHVrZXcvRG9jdW1lbnRzL0dpdEh1Yi9IQ0RFNTU2L0hDREU1NTYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcbiAgICBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD4ge2BcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHNvbWV0aGluZyB0byBmaWx0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=js\\Filter.js */"
            }), _react2.default.createElement("input", {
                onChange: this.onChange,
                placeholder: "Enter something to filter",
                value: this.props.filter,
                type: "text",
                className: "jsx-1901052929" + " " + "search",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }));
        }
    }]);

    return Filter;
}(_react2.default.PureComponent);

exports.default = Filter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzXFxGaWx0ZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJGaWx0ZXIiLCJvbkNoYW5nZSIsImUiLCJwcm9wcyIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0ksQUFFYzs7Ozs7Ozs7Ozs7Ozs7Z04sQUFDakIsV0FBVyxVQUFBLEFBQUMsR0FBTSxBQUNkO2tCQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMsRUFBQSxBQUFFLE9BQXRCLEFBQTZCLEFBQ2hDO0E7Ozs7O2lDQUNRLEFBQ0w7bUNBQ0ksY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGFBQUE7eUJBQUE7cUJBQUEsQUFLSTtBQUxKOzBCQU9rQixLQUZkLEFBRW1CLEFBQ2Y7NkJBSEosQUFHZ0IsQUFDWjt1QkFBTyxLQUFBLEFBQUssTUFKaEIsQUFJc0IsQUFDbEI7c0JBTEosQUFLUztvREFMVCxBQUNjOzs4QkFEZDtnQ0FOUixBQUNJLEFBS0ksQUFTWDtBQVRXO0FBRUk7Ozs7O0VBYmdCLGdCQUFNLEE7O2tCQUFyQixBIiwiZmlsZSI6IkZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9sdWtldy9Eb2N1bWVudHMvR2l0SHViL0hDREU1NTYvSENERTU1NiJ9