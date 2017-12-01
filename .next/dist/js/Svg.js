"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\lukew\\Documents\\GitHub\\HCDE556\\HCDE556\\js\\Svg.js";

exports.default = function (f) {
    return function (_PureComponent) {
        (0, _inherits3.default)(Svg, _PureComponent);

        function Svg() {
            var _ref;

            var _temp, _this, _ret;

            (0, _classCallCheck3.default)(this, Svg);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Svg.__proto__ || (0, _getPrototypeOf2.default)(Svg)).call.apply(_ref, [this].concat(args))), _this), _this.setRef = function (ref) {
                return _this.node = ref;
            }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
        }

        (0, _createClass3.default)(Svg, [{
            key: "componentWillUpdate",
            value: function componentWillUpdate() {
                if (!f) {
                    console.warn("unused svg component");
                    return;
                }
                f(this.node, this.props);
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                if (!f) {
                    console.warn("unused svg component");
                    return;
                }
                f(this.node, this.props);
            }
        }, {
            key: "render",
            value: function render() {
                return _react2.default.createElement("svg", (0, _extends3.default)({}, this.props, { ref: this.setRef, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }));
            }
        }]);

        return Svg;
    }(_react.PureComponent);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzXFxTdmcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50Iiwic2V0UmVmIiwibm9kZSIsInJlZiIsImYiLCJjb25zb2xlIiwid2FybiIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVMsQUFFaEI7Ozs7Ozs7O2tCQUFlLGFBQUE7cUNBQUE7cUNBQUE7O3VCQUFBO2dCQUFBOzs4QkFBQTs7Z0RBQUE7O2lHQUFBO3VDQUFBO0FBQUE7OzhNQUFBLEFBaUJYLFNBQVMsZUFBQTt1QkFBTyxNQUFBLEFBQUssT0FBWixBQUFtQjtBQWpCakIsdUVBQUE7QUFBQTs7O2lCQUFBO2tEQUNXLEFBQ2xCO29CQUFJLENBQUosQUFBSyxHQUFHLEFBQ0o7NEJBQUEsQUFBUSxLQUFSLEFBQWEsQUFDYjtBQUNIO0FBQ0Q7a0JBQUUsS0FBRixBQUFPLE1BQU0sS0FBYixBQUFrQixBQUNyQjtBQVBVO0FBQUE7aUJBQUE7Z0RBU1MsQUFDaEI7b0JBQUksQ0FBSixBQUFLLEdBQUcsQUFDSjs0QkFBQSxBQUFRLEtBQVIsQUFBYSxBQUNiO0FBQ0g7QUFDRDtrQkFBRSxLQUFGLEFBQU8sTUFBTSxLQUFiLEFBQWtCLEFBQ3JCO0FBZlU7QUFBQTtpQkFBQTtxQ0FtQkYsQUFDTDt1RkFBZ0IsS0FBVCxBQUFjLFNBQU8sS0FBSyxLQUExQixBQUErQjtrQ0FBL0I7b0NBQVAsQUFBTyxBQUNWO0FBRFU7a0JBQUE7QUFwQkE7QUFBQTs7ZUFBQTtBQUFBLEFBQXVCO0FBQXRDIiwiZmlsZSI6IlN2Zy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9sdWtldy9Eb2N1bWVudHMvR2l0SHViL0hDREU1NTYvSENERTU1NiJ9