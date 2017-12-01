'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _d3Selection = require('d3-selection');

var _d3Scale = require('d3-scale');

var _d3Array = require('d3-array');

require('d3-transition');

var _Svg = require('./Svg');

var _Svg2 = _interopRequireDefault(_Svg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BarChart = (0, _Svg2.default)(function (node, props) {
    var bars = 4;
    var data = [];
    for (var i = 0; i < bars; i++) {
        data.push(Math.random());
    }props = (0, _extends3.default)({}, props, { width: 200, height: 200, barWidth: 35, barSpacing: 5, data: data });

    var size = [props.width, props.height];

    var dataMax = (0, _d3Array.max)(props.data);
    var yScale = (0, _d3Scale.scaleLinear)().domain([0, dataMax]).range([0, size[1]]);

    var fill = function fill(d, i) {
        return i % 2 == 0 ? '#444' : '#333';
    };

    (0, _d3Selection.select)(node).attr('id', props.id).selectAll('rect').remove();

    (0, _d3Selection.select)(node).selectAll('rect').data(props.data).enter().append('rect').attr('y', function (d, i) {
        return i * (props.barWidth + props.barSpacing);
    }).attr('x', function (d) {
        return 0;
    }).attr('width', function (d) {
        return yScale(d);
    }).attr('height', props.barWidth).style('fill', fill).on('mouseover', function (data, index, nodes) {
        (0, _d3Selection.select)(nodes[index]).style('fill', '#5555aa');
    }).on('mouseout', function (data, index, nodes) {
        (0, _d3Selection.select)(nodes[index]).transition().duration(200).style('fill', fill);
    });
});

exports.default = BarChart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzXFxCYXJDaGFydC5qcyJdLCJuYW1lcyI6WyJzZWxlY3QiLCJzY2FsZUxpbmVhciIsIm1heCIsIlN2ZyIsIkJhckNoYXJ0Iiwibm9kZSIsInByb3BzIiwiYmFycyIsImRhdGEiLCJpIiwicHVzaCIsIk1hdGgiLCJyYW5kb20iLCJ3aWR0aCIsImhlaWdodCIsImJhcldpZHRoIiwiYmFyU3BhY2luZyIsInNpemUiLCJkYXRhTWF4IiwieVNjYWxlIiwiZG9tYWluIiwicmFuZ2UiLCJmaWxsIiwiZCIsImF0dHIiLCJpZCIsInNlbGVjdEFsbCIsInJlbW92ZSIsImVudGVyIiwiYXBwZW5kIiwic3R5bGUiLCJvbiIsImluZGV4Iiwibm9kZXMiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUzs7QUFDVDs7QUFDQSxBQUFPLEFBQVM7Ozs7OztBQUVoQixJQUFNLDhCQUFlLFVBQUEsQUFBQyxNQUFELEFBQU8sT0FBVSxBQUNsQztRQUFNLE9BQU4sQUFBYSxBQUNiO1FBQU0sT0FBTixBQUFhLEFBQ2I7U0FBSyxJQUFJLElBQVQsQUFBYSxHQUFHLElBQWhCLEFBQW9CLE1BQXBCLEFBQTBCLEtBQUs7YUFBQSxBQUFLLEtBQUssS0FBekMsQUFBK0IsQUFBVSxBQUFLO0FBRTlDLHdDQUFBLEFBQWEsU0FBTyxPQUFwQixBQUEyQixLQUFLLFFBQWhDLEFBQXdDLEtBQUssVUFBN0MsQUFBdUQsSUFBSSxZQUEzRCxBQUF1RSxHQUFHLE1BQTFFLEFBRUE7O1FBQU0sT0FBTyxDQUFDLE1BQUQsQUFBTyxPQUFPLE1BQTNCLEFBQWEsQUFBb0IsQUFFakM7O1FBQU0sVUFBVSxrQkFBSSxNQUFwQixBQUFnQixBQUFVLEFBQzFCO1FBQU0sU0FBUyw0QkFBQSxBQUNWLE9BQU8sQ0FBQSxBQUFDLEdBREUsQUFDSCxBQUFJLFVBREQsQUFFVixNQUFNLENBQUEsQUFBQyxHQUFHLEtBRmYsQUFBZSxBQUVKLEFBQUksQUFBSyxBQUVwQjs7UUFBTSxPQUFPLFNBQVAsQUFBTyxLQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUo7ZUFBVSxJQUFBLEFBQUksS0FBSixBQUFTLElBQVQsQUFBYSxTQUF2QixBQUFnQztBQUE3QyxBQUVBOzs2QkFBQSxBQUFPLE1BQVAsQUFDSyxLQURMLEFBQ1UsTUFBTSxNQURoQixBQUNzQixJQUR0QixBQUVLLFVBRkwsQUFFZSxRQUZmLEFBR0ssQUFFTDs7NkJBQUEsQUFBTyxNQUFQLEFBQ0ssVUFETCxBQUNlLFFBRGYsQUFFSyxLQUFLLE1BRlYsQUFFZ0IsTUFGaEIsQUFHSyxRQUhMLEFBSUssT0FKTCxBQUlZLFFBSlosQUFLUyxLQUxULEFBS2MsS0FBSyxVQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUo7ZUFBVSxLQUFLLE1BQUEsQUFBTSxXQUFXLE1BQWhDLEFBQVUsQUFBNEI7QUFMekQsT0FBQSxBQU1TLEtBTlQsQUFNYyxLQUFLLGFBQUE7ZUFBQSxBQUFLO0FBTnhCLE9BQUEsQUFPUyxLQVBULEFBT2MsU0FBUyxhQUFBO2VBQUssT0FBTCxBQUFLLEFBQU87QUFQbkMsT0FBQSxBQVFTLEtBUlQsQUFRYyxVQUFVLE1BUnhCLEFBUThCLFVBUjlCLEFBU1MsTUFUVCxBQVNlLFFBVGYsQUFTdUIsTUFUdkIsQUFVUyxHQVZULEFBVVksYUFBYSxVQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVAsQUFBYyxPQUFVLEFBQ3JDO2lDQUFPLE1BQVAsQUFBTyxBQUFNLFFBQWIsQUFDSyxNQURMLEFBQ1csUUFEWCxBQUNtQixBQUN0QjtBQWJULE9BQUEsQUFjUyxHQWRULEFBY1ksWUFBWSxVQUFBLEFBQVUsTUFBVixBQUFnQixPQUFoQixBQUF1QixPQUFPLEFBQzFDO2lDQUFPLE1BQVAsQUFBTyxBQUFNLFFBQWIsQUFDSyxhQURMLEFBRUssU0FGTCxBQUVjLEtBRmQsQUFHSyxNQUhMLEFBR1csUUFIWCxBQUdtQixBQUN0QjtBQW5CVCxBQW9CSDtBQXpDRCxBQUFpQixBQTJDakIsQ0EzQ2lCOztrQkEyQ2pCLEFBQWUiLCJmaWxlIjoiQmFyQ2hhcnQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbHVrZXcvRG9jdW1lbnRzL0dpdEh1Yi9IQ0RFNTU2L0hDREU1NTYifQ==