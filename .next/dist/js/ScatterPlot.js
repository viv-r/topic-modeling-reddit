'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _d3Selection = require('d3-selection');

var _d3Scale = require('d3-scale');

var _d3Array = require('d3-array');

var _d3Axis = require('d3-axis');

require('./Fisheye');

require('d3-transition');

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

var _Svg = require('./Svg');

var _Svg2 = _interopRequireDefault(_Svg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var ScatterPlot = (0, _Svg2.default)(function (node, props) {
    // Various accessors that specify the four dimensions of data to visualize.
    function x(d) {
        return d.p_topicA;
    }
    function y(d) {
        return d.p_topicB;
    }
    function radius(d) {
        return d.frequency;
    }
    function color(d) {
        return d.c_topic;
    }

    // Chart dimensions.
    var margin = { top: 5.5, right: 19.5, bottom: 12.5, left: 39.5 },
        width = 700,
        height = 700;

    // Various scales and distortions.
    var xScale = d3.fisheye.scale(_d3Scale.scaleLog).domain([300, 1e2]).range([0, width]),
        yScale = d3.fisheye.scale(_d3Scale.scaleLinear).domain([20, 90]).range([height, 0]);

    // var xScale = scaleLog().domain([300, 1e2]).range([0, width]),
    //     yScale = scaleLinear().domain([20, 90]).range([height, 0]);


    var colorScale = (0, _d3Scale.scaleLinear)().domain([0, 1]).range([0, 1]);

    // Create the SVG container and set the origin.
    var svg = (0, _d3Selection.select)(node).attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // The x & y axes.
    var xAxis = (0, _d3Axis.axisBottom)(xScale).tickFormat(d3.format(",d")).tickSize(-height),
        yAxis = (0, _d3Axis.axisLeft)(yScale).tickSize(-width);

    // Add a background rect for mousemove.
    svg.append("rect").attr("class", "background").attr("width", width).attr("height", height);

    // Add the x-axis.
    svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);

    // Add the y-axis.
    svg.append("g").attr("class", "y axis").call(yAxis);

    // Add an x-axis label.
    svg.append("text").attr("class", "x label").attr("text-anchor", "end").attr("x", width - 6).attr("y", height - 6).text("probability towards second selected topic");

    // Add a y-axis label.
    svg.append("text").attr("class", "y label").attr("text-anchor", "end").attr("x", -6).attr("y", 6).attr("dy", ".75em").attr("transform", "rotate(-90)").text("probability towards first selected topic");

    // Add a dot per word and set the colors
    var dot = svg.append("g").attr("class", "dots").selectAll(".dot").data(props).enter().append("circle").attr("class", "dot").style("fill", function (d) {
        return colorScale(color(d));
    }).call(position).sort(function (a, b) {
        return radius(b) - radius(a);
    });

    // Add a title.
    dot.append("title").text(function (d) {
        return d.name;
    });

    // Positions the dots based on data.
    function position(dot) {
        dot.attr("cx", function (d) {
            return xScale(x(d));
        }).attr("cy", function (d) {
            return yScale(y(d));
        }).attr("r", function (d) {
            return radiusScale(radius(d));
        });
    }

    svg.on("mousemove", function () {
        var mouseX = event.pageX;
        var mouseY = event.pageY;
        xScale.distortion(2.5).focus(mouseX);
        yScale.distortion(2.5).focus(mouseY);

        dot.call(position);
        svg.select(".x.axis").call(xAxis);
        svg.select(".y.axis").call(yAxis);
    });
});

exports.default = ScatterPlot;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzXFxTY2F0dGVyUGxvdC5qcyJdLCJuYW1lcyI6WyJzZWxlY3QiLCJzY2FsZUxpbmVhciIsInNjYWxlTG9nIiwibWF4IiwiYXhpc0xlZnQiLCJheGlzQm90dG9tIiwiZDMiLCJTdmciLCJTY2F0dGVyUGxvdCIsIm5vZGUiLCJwcm9wcyIsIngiLCJkIiwicF90b3BpY0EiLCJ5IiwicF90b3BpY0IiLCJyYWRpdXMiLCJmcmVxdWVuY3kiLCJjb2xvciIsImNfdG9waWMiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInhTY2FsZSIsImZpc2hleWUiLCJzY2FsZSIsImRvbWFpbiIsInJhbmdlIiwieVNjYWxlIiwiY29sb3JTY2FsZSIsInN2ZyIsImF0dHIiLCJhcHBlbmQiLCJ4QXhpcyIsInRpY2tGb3JtYXQiLCJmb3JtYXQiLCJ0aWNrU2l6ZSIsInlBeGlzIiwiY2FsbCIsInRleHQiLCJkb3QiLCJzZWxlY3RBbGwiLCJkYXRhIiwiZW50ZXIiLCJzdHlsZSIsInBvc2l0aW9uIiwic29ydCIsImEiLCJiIiwibmFtZSIsInJhZGl1c1NjYWxlIiwib24iLCJtb3VzZVgiLCJldmVudCIsInBhZ2VYIiwibW91c2VZIiwicGFnZVkiLCJkaXN0b3J0aW9uIiwiZm9jdXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBUyxBQUFhOztBQUN0QixBQUFTOztBQUNULEFBQVMsQUFBVTs7QUFDbkIsQUFBTzs7QUFDUDs7QUFDQSxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTyxBQUFTOzs7Ozs7OztBQUVoQixJQUFNLGlDQUFrQixVQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVUsQUFDckM7QUFDQTthQUFBLEFBQVMsRUFBVCxBQUFXLEdBQUcsQUFBRTtlQUFPLEVBQVAsQUFBUyxBQUFXO0FBQ3BDO2FBQUEsQUFBUyxFQUFULEFBQVcsR0FBRyxBQUFFO2VBQU8sRUFBUCxBQUFTLEFBQVc7QUFDcEM7YUFB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T0ssS0FQTCxBQU9VLEFBRVY7O0FBQ0E7UUFBSSxVQUFNLEFBQUksT0FBSixBQUFXLEtBQVgsQUFDTCxLQURLLEFBQ0EsU0FEQSxBQUNTLFFBRFQsQUFFTCxVQUZLLEFBRUssUUFGTCxBQUdMLEtBSEssQUFHQSxPQUhBLEFBSUwsUUFKSyxBQUlHLE9BSkgsQUFJVSxVQUpWLEFBS0wsS0FMSyxBQUtBLFNBTEEsQUFLUyxPQUxULEFBTUwsTUFOSyxBQU1DLFFBQVEsVUFBQSxBQUFVLEdBQUcsQUFBRTtlQUFPLFdBQVcsTUFBbEIsQUFBTyxBQUFXLEFBQU0sQUFBTTtBQU50RCxLQUFBLEVBQUEsQUFPTCxLQVBLLEFBT0EsVUFQQSxBQVFMLEtBQUssVUFBQSxBQUFVLEdBQVYsQUFBYSxHQUFHLEFBQUU7ZUFBTyxPQUFBLEFBQU8sS0FBSyxPQUFuQixBQUFtQixBQUFPLEFBQUs7QUFSM0QsQUFBVSxBQVVWOztBQUNBO1FBQUEsQUFBSSxPQUFKLEFBQVcsU0FBWCxBQUNLLEtBQUssVUFBQSxBQUFVLEdBQUcsQUFBRTtlQUFPLEVBQVAsQUFBUyxBQUFPO0FBRHpDLEFBR0E7O0FBQ0E7YUFBQSxBQUFTLFNBQVQsQUFBa0IsS0FBSyxBQUNuQjtZQUFBLEFBQUksS0FBSixBQUFTLE1BQU0sVUFBQSxBQUFVLEdBQUcsQUFBRTttQkFBTyxPQUFPLEVBQWQsQUFBTyxBQUFPLEFBQUUsQUFBTTtBQUFwRCxXQUFBLEFBQ0ssS0FETCxBQUNVLE1BQU0sVUFBQSxBQUFVLEdBQUcsQUFBRTttQkFBTyxPQUFPLEVBQWQsQUFBTyxBQUFPLEFBQUUsQUFBTTtBQURyRCxXQUFBLEFBRUssS0FGTCxBQUVVLEtBQUssVUFBQSxBQUFVLEdBQUcsQUFBRTttQkFBTyxZQUFZLE9BQW5CLEFBQU8sQUFBWSxBQUFPLEFBQU07QUFGOUQsQUFHSDtBQUVEOztRQUFBLEFBQUksR0FBSixBQUFPLGFBQWEsWUFBWSxBQUM1QjtZQUFNLFNBQVMsTUFBZixBQUFxQixBQUNyQjtZQUFNLFNBQVMsTUFBZixBQUFxQixBQUNyQjtlQUFBLEFBQU8sV0FBUCxBQUFrQixLQUFsQixBQUF1QixNQUF2QixBQUE2QixBQUM3QjtlQUFBLEFBQU8sV0FBUCxBQUFrQixLQUFsQixBQUF1QixNQUF2QixBQUE2QixBQUU3Qjs7WUFBQSxBQUFJLEtBQUosQUFBUyxBQUNUO1lBQUEsQUFBSSxPQUFKLEFBQVcsV0FBWCxBQUFzQixLQUF0QixBQUEyQixBQUMzQjtZQUFBLEFBQUksT0FBSixBQUFXLFdBQVgsQUFBc0IsS0FBdEIsQUFBMkIsQUFDOUI7QUFURCxBQVVIO0FBdkdELEFBQW9CLEFBeUdwQixDQXpHb0I7O2tCQXlHcEIsQUFBZSIsImZpbGUiOiJTY2F0dGVyUGxvdC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9sdWtldy9Eb2N1bWVudHMvR2l0SHViL0hDREU1NTYvSENERTU1NiJ9