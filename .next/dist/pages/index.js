'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reddit_jokes = require('../data/reddit_jokes.json');

var _reddit_jokes2 = _interopRequireDefault(_reddit_jokes);

var _JokeList = require('../js/JokeList');

var _JokeList2 = _interopRequireDefault(_JokeList);

var _BarChart = require('../js/BarChart');

var _BarChart2 = _interopRequireDefault(_BarChart);

var _ScatterPlot = require('../js/ScatterPlot');

var _ScatterPlot2 = _interopRequireDefault(_ScatterPlot);

var _TopicSelector = require('../js/TopicSelector');

var _TopicSelector2 = _interopRequireDefault(_TopicSelector);

var _Filter = require('../js/Filter');

var _Filter2 = _interopRequireDefault(_Filter);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\lukew\\Documents\\GitHub\\HCDE556\\HCDE556\\pages\\index.js?entry';


var Main = function (_React$Component) {
    (0, _inherits3.default)(Main, _React$Component);

    function Main() {
        (0, _classCallCheck3.default)(this, Main);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).call(this));

        _this.onFilterChange = function (filter) {
            _this.setState({
                filter: filter
            });
        };

        _this.state = {
            data: _reddit_jokes2.default.map(function (d, i) {
                return (0, _extends3.default)({}, d, { id: d.id + i });
            }),
            filter: ''
        };
        return _this;
    }

    (0, _createClass3.default)(Main, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, 'Topic Modeling the Reddit Jokeset'), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Montserrat', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }), _react2.default.createElement('script', { src: 'http://d3js.org/d3.v3.min.js', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/index.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            })), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('nav', { id: 'interactions', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement(_TopicSelector2.default, { id: "topic_a", init: "1", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), _react2.default.createElement(_TopicSelector2.default, { id: "topic_b", init: "2", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }), _react2.default.createElement('button', { id: 'help_button', className: 'selector word_joke_selector', onClick: this.showHelpOverlay, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, '?')), _react2.default.createElement('div', { id: 'content_left', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('div', { id: 'scatter_plot', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(_ScatterPlot2.default, { data: _reddit_jokes2.default, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }))), _react2.default.createElement('div', { id: 'content_right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_BarChart2.default, { data: _reddit_jokes2.default, id: 'topic_a_bar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }), _react2.default.createElement(_BarChart2.default, { data: _reddit_jokes2.default, id: 'topic_b_bar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            })), _react2.default.createElement('div', { id: 'joke_content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            })), _react2.default.createElement('div', { id: 'help_overlay', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }));
        }
    }]);

    return Main;
}(_react2.default.Component);

exports.default = Main;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImRhdGEiLCJKb2tlTGlzdCIsIkJhckNoYXJ0IiwiU2NhdHRlclBsb3QiLCJUb3BpY1NlbGVjdG9yIiwiRmlsdGVyIiwiSGVhZCIsIk1haW4iLCJvbkZpbHRlckNoYW5nZSIsInNldFN0YXRlIiwiZmlsdGVyIiwic3RhdGUiLCJtYXAiLCJkIiwiaSIsImlkIiwic2hvd0hlbHBPdmVybGF5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQW1COzs7O0FBQzFCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7Ozs7Ozs7SSxBQUVjO2tDQUNqQjs7b0JBQWM7NENBQUE7O2dJQUFBOztjQUFBLEFBT2QsaUJBQWlCLGtCQUFVLEFBQ3ZCO2tCQUFBLEFBQUs7d0JBQUwsQUFBYyxBQUdqQjtBQUhpQixBQUNWO0FBVE0sQUFFVjs7Y0FBQSxBQUFLO3lDQUNLLEFBQUssSUFBSSxVQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUo7a0RBQUEsQUFBZ0IsS0FBRyxJQUFJLEVBQUEsQUFBRSxLQUF6QixBQUE4QjtBQURwQyxBQUNILEFBQ04sYUFETTtvQkFIQSxBQUVWLEFBQWEsQUFFRDtBQUZDLEFBQ1Q7ZUFHUDs7Ozs7aUNBT1EsQUFDTDttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw4RUFBTSxNQUFOLEFBQVcsc0RBQXFELEtBQWhFLEFBQW9FOzhCQUFwRTtnQ0FGSixBQUVJLEFBQ0E7QUFEQTswREFDUSxLQUFSLEFBQVk7OEJBQVo7Z0NBSEosQUFHSSxBQUNBO0FBREE7d0RBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7OEJBQTVCO2dDQUxSLEFBQ0ksQUFJSSxBQUVKO0FBRkk7aUNBRUosY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQSxTQUFLLElBQUwsQUFBUTs4QkFBUjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyx5Q0FBYyxJQUFmLEFBQW1CLFdBQVcsTUFBOUIsQUFBb0M7OEJBQXBDO2dDQURKLEFBQ0ksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQWMsSUFBZixBQUFtQixXQUFXLE1BQTlCLEFBQW9DOzhCQUFwQztnQ0FGSixBQUVJLEFBRUE7QUFGQTtnQ0FFQSxjQUFBLFlBQVEsSUFBUixBQUFXLGVBQWMsV0FBekIsQUFBbUMsK0JBQThCLFNBQVMsS0FBMUUsQUFBK0U7OEJBQS9FO2dDQUFBO0FBQUE7ZUFMUixBQUNJLEFBSUksQUFHSix1QkFBQSxjQUFBLFNBQUssSUFBTCxBQUFROzhCQUFSO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssSUFBTCxBQUFROzhCQUFSO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLHVDQUFELEFBQWEsQUFBTTs4QkFBbkI7Z0NBVlosQUFRSSxBQUNJLEFBQ0ksQUFJUjtBQUpRO2tDQUlSLGNBQUEsU0FBSyxJQUFMLEFBQVE7OEJBQVI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsb0NBQUQsQUFBVSxBQUFNLDhCQUFNLElBQXRCLEFBQXlCOzhCQUF6QjtnQ0FESixBQUNJLEFBQ0E7QUFEQTs7OzhCQUNBO2dDQUZKLEFBRUksQUFDQTtBQURBO0FBQUEsZ0NBQ0EsQUFBQyxvQ0FBRCxBQUFVLEFBQU0sOEJBQU0sSUFBdEIsQUFBeUI7OEJBQXpCO2dDQWpCUixBQWNJLEFBR0ksQUFHSjtBQUhJO3dEQUdDLElBQUwsQUFBUTs4QkFBUjtnQ0EzQlIsQUFPSSxBQW9CSSxBQVFKO0FBUkk7d0RBUUMsSUFBTCxBQUFROzhCQUFSO2dDQXBDUixBQUNJLEFBbUNJLEFBS1g7QUFMVzs7Ozs7O0VBbkRrQixnQkFBTSxBOztrQkFBbkIsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9sdWtldy9Eb2N1bWVudHMvR2l0SHViL0hDREU1NTYvSENERTU1NiJ9