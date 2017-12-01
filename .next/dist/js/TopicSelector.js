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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\lukew\\Documents\\GitHub\\HCDE556\\HCDE556\\js\\TopicSelector.js";


var TopicSelector = function (_React$PureComponent) {
     (0, _inherits3.default)(TopicSelector, _React$PureComponent);

     function TopicSelector(props) {
          (0, _classCallCheck3.default)(this, TopicSelector);

          var _this = (0, _possibleConstructorReturn3.default)(this, (TopicSelector.__proto__ || (0, _getPrototypeOf2.default)(TopicSelector)).call(this, props));

          _this.state = {
               value: _this.props.init
          };
          return _this;
     }

     (0, _createClass3.default)(TopicSelector, [{
          key: "changeHandler",
          value: function changeHandler(e) {
               this.setState({
                    value: e.value
               });
          }
     }, {
          key: "render",
          value: function render() {
               return _react2.default.createElement("select", {
                    id: this.props.id,
                    onChange: this.changeHandler.bind(this),
                    value: this.state.value,
                    className: "selector topic_selector", __source: {
                         fileName: _jsxFileName,
                         lineNumber: 19
                    }
               }, _react2.default.createElement("option", { value: "1", __source: {
                         fileName: _jsxFileName,
                         lineNumber: 25
                    }
               }, "Topic 1"), _react2.default.createElement("option", { value: "2", __source: {
                         fileName: _jsxFileName,
                         lineNumber: 26
                    }
               }, "Topic 2"), _react2.default.createElement("option", { value: "3", __source: {
                         fileName: _jsxFileName,
                         lineNumber: 27
                    }
               }, "Topic 3"));
          }
     }]);

     return TopicSelector;
}(_react2.default.PureComponent);

exports.default = TopicSelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzXFxUb3BpY1NlbGVjdG9yLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVG9waWNTZWxlY3RvciIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImluaXQiLCJlIiwic2V0U3RhdGUiLCJpZCIsImNoYW5nZUhhbmRsZXIiLCJiaW5kIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7Ozs7SSxBQUVjOzRDQUNqQjs7NEJBQUEsQUFBWSxPQUFPOzhDQUFBOzswSkFBQSxBQUNULEFBQ047O2dCQUFBLEFBQUs7c0JBQ00sTUFBQSxBQUFLLE1BSEQsQUFFZixBQUFhLEFBQ1M7QUFEVCxBQUNUO2lCQUVMOzs7Ozt3Q0FFWSxBLEdBQUcsQUFDZDtvQkFBQSxBQUFLOzJCQUNPLEVBRFosQUFBYyxBQUNBLEFBRWhCO0FBSGdCLEFBQ1Q7Ozs7bUNBSUMsQUFDTjtzQ0FDTyxjQUFBO3dCQUNTLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2Y7OEJBQVUsS0FBQSxBQUFLLGNBQUwsQUFBbUIsS0FGbEMsQUFFZSxBQUF3QixBQUNsQzsyQkFBTyxLQUFBLEFBQUssTUFIakIsQUFHdUIsQUFDbEI7K0JBSkwsQUFJZTttQ0FKZjtxQ0FBQSxBQU1HO0FBTkg7QUFDSyxnQkFETCxrQkFNRyxjQUFBLFlBQVEsT0FBUixBQUFjO21DQUFkO3FDQUFBO0FBQUE7a0JBTkgsQUFNRyxBQUNBLDRCQUFBLGNBQUEsWUFBUSxPQUFSLEFBQWM7bUNBQWQ7cUNBQUE7QUFBQTtrQkFQSCxBQU9HLEFBQ0EsNEJBQUEsY0FBQSxZQUFRLE9BQVIsQUFBYzttQ0FBZDtxQ0FBQTtBQUFBO2tCQVRWLEFBQ08sQUFRRyxBQUdaOzs7OztFQTNCcUMsZ0JBQU0sQTs7a0JBQTVCLEEiLCJmaWxlIjoiVG9waWNTZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9sdWtldy9Eb2N1bWVudHMvR2l0SHViL0hDREU1NTYvSENERTU1NiJ9