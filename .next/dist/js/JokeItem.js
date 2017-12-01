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

var _jsxFileName = "C:\\Users\\lukew\\Documents\\GitHub\\HCDE556\\HCDE556\\js\\JokeItem.js";


var JokeItem = function (_React$PureComponent) {
    (0, _inherits3.default)(JokeItem, _React$PureComponent);

    function JokeItem() {
        (0, _classCallCheck3.default)(this, JokeItem);

        return (0, _possibleConstructorReturn3.default)(this, (JokeItem.__proto__ || (0, _getPrototypeOf2.default)(JokeItem)).apply(this, arguments));
    }

    (0, _createClass3.default)(JokeItem, [{
        key: "render",
        value: function render() {
            var joke = this.props.joke;

            if (!joke) return null;

            return _react2.default.createElement("div", {
                className: "jsx-538594640" + " " + "joke",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, _react2.default.createElement(_style2.default, {
                styleId: "538594640",
                css: ".joke.jsx-538594640{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5px;margin:5px;border:1px solid black;background-color:#fafafa;}.col.jsx-538594640{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.left.jsx-538594640{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:1;-ms-flex:1;flex:1;}.right.jsx-538594640{-webkit-flex:9;-ms-flex:9;flex:9;}.score.jsx-538594640{-webkit-flex:9;-ms-flex:9;flex:9;}.id.jsx-538594640{-webkit-flex:1;-ms-flex:1;flex:1;font-weight:100;font-size:11px;}.title.jsx-538594640{font-size:14px;font-weight:800;}.label.jsx-538594640{font-size:8px;color:gray;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzXFxKb2tlSXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVNEIsQUFHc0MsQUFPQSxBQUlNLEFBSVosQUFHQSxBQUlQLEFBSWUsQUFJRCxjQUNILENBSkssVUFLcEIsTUFKQSxFQVpBLEFBR0EsQUFHb0IsZ0JBQ0QsZUFDbkIsVUF2QmdCLEFBT1UsWUFOWCxPQVVKLElBVGdCLHVCQUU1QixNQVFDLG1CQVJBLE9BSUEiLCJmaWxlIjoianNcXEpva2VJdGVtLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2x1a2V3L0RvY3VtZW50cy9HaXRIdWIvSENERTU1Ni9IQ0RFNTU2Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpva2VJdGVtIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgam9rZSA9IHRoaXMucHJvcHMuam9rZTtcclxuXHJcbiAgICAgICAgaWYgKCFqb2tlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2tlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmpva2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiA5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2NvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiA5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0IGNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2pva2Uuc2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPklEOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtqb2tlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57am9rZS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj57am9rZS5ib2R5fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=js\\JokeItem.js */"
            }), _react2.default.createElement("div", {
                className: "jsx-538594640" + " " + "left col",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement("div", {
                className: "jsx-538594640" + " " + "score",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, joke.score), _react2.default.createElement("div", {
                className: "jsx-538594640" + " " + "id",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement("span", {
                className: "jsx-538594640" + " " + "label",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, "ID: "), joke.id)), _react2.default.createElement("div", {
                className: "jsx-538594640" + " " + "right col",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement("div", {
                className: "jsx-538594640" + " " + "title",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, joke.title), _react2.default.createElement("div", {
                className: "jsx-538594640" + " " + "body",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, joke.body)));
        }
    }]);

    return JokeItem;
}(_react2.default.PureComponent);

exports.default = JokeItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzXFxKb2tlSXRlbS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkpva2VJdGVtIiwiam9rZSIsInByb3BzIiwic2NvcmUiLCJpZCIsInRpdGxlIiwiYm9keSIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7Ozs7OztJLEFBRWM7Ozs7Ozs7Ozs7O2lDQUNSLEFBQ0w7Z0JBQU0sT0FBTyxLQUFBLEFBQUssTUFBbEIsQUFBd0IsQUFFeEI7O2dCQUFJLENBQUosQUFBSyxNQUFNLE9BQUEsQUFBTyxBQUVsQjs7bUNBQ0ksY0FBQTttREFBQSxBQUFlOzs4QkFBZjtnQ0FBQTtBQUFBO0FBQUEsYUFBQTt5QkFBQTtxQkFBQSxBQXFDSTtBQXJDSixnQ0FxQ0ksY0FBQTttREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBO21EQUFBLEFBQWU7OzhCQUFmO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQURKLEFBQ0ksQUFDVSxBQUVWLHdCQUFBLGNBQUE7bURBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTttREFBQSxBQUFnQjs7OEJBQWhCO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQyxjQTNDYixBQXFDSSxBQUlJLEFBRVUsQUFHZCxzQkFBQSxjQUFBO21EQUFBLEFBQWU7OzhCQUFmO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7bURBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFBd0I7QUFBeEI7QUFBQSxvQkFESixBQUNJLEFBQTZCLEFBQzdCLHdCQUFBLGNBQUE7bURBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFBdUI7QUFBdkI7QUFBQSxvQkFqRFosQUFDSSxBQThDSSxBQUVJLEFBQTRCLEFBSTNDOzs7OztFQTNEaUMsZ0JBQU0sQTs7a0JBQXZCLEEiLCJmaWxlIjoiSm9rZUl0ZW0uanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbHVrZXcvRG9jdW1lbnRzL0dpdEh1Yi9IQ0RFNTU2L0hDREU1NTYifQ==