import { select } from 'd3-selection';
import { scaleLinear, scaleLog } from 'd3-scale';
import { max } from 'd3-array';
import { axisLeft, axisBottom } from 'd3-axis'
// import './Fisheye';
import 'd3-transition';
import * as d3 from 'd3';
import Svg from './Svg';

const ScatterPlot = Svg((node, props) => {
    // Various accessors that specify the four dimensions of data to visualize.
    function x(d) { return d.p_topicA; }
    function y(d) { return d.p_topicB; }
    function radius(d) { return d.frequency; }
    function color(d) { return d.c_topic; }

    // Chart dimensions.
    var margin = { top: 5.5, right: 19.5, bottom: 12.5, left: 39.5 },
        width = 700,
        height = 700;

    // Various scales and distortions.
    // var xScale = d3.fisheye.scale(scaleLog).domain([300, 1e2]).range([0, width]),
    // yScale = d3.fisheye.scale(scaleLinear).domain([20, 90]).range([height, 0]);

    var xScale = scaleLog().domain([300, 1e2]).range([0, width]),
        yScale = scaleLinear().domain([20, 90]).range([height, 0]);


    const colorScale = scaleLinear()
        .domain([0, 1])
        .range([0, 1])

    // Create the SVG container and set the origin.
    var svg = select(node)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // The x & y axes.
    var xAxis = axisBottom(xScale).tickFormat(d3.format(",d")).tickSize(-height),
        yAxis = axisLeft(yScale).tickSize(-width);


    // Add a background rect for mousemove.
    svg.append("rect")
        .attr("class", "background")
        .attr("width", width)
        .attr("height", height);

    // Add the x-axis.
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Add the y-axis.
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    // Add an x-axis label.
    svg.append("text")
        .attr("class", "x label")
        .attr("text-anchor", "end")
        .attr("x", width - 6)
        .attr("y", height - 6)
        .text("probability towards second selected topic");

    // Add a y-axis label.
    svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("x", -6)
        .attr("y", 6)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("probability towards first selected topic");

    // Add a dot per word and set the colors
    var dot = svg.append("g")
        .attr("class", "dots")
        .selectAll(".dot")
        .data(props)
        .enter().append("circle")
        .attr("class", "dot")
        .style("fill", function (d) { return colorScale(color(d)); })
        .call(position)
        .sort(function (a, b) { return radius(b) - radius(a); });

    // Add a title.
    dot.append("title")
        .text(function (d) { return d.name; });

    // Positions the dots based on data.
    function position(dot) {
        dot.attr("cx", function (d) { return xScale(x(d)); })
            .attr("cy", function (d) { return yScale(y(d)); })
            .attr("r", function (d) { return radiusScale(radius(d)); });
    }

    svg.on("mousemove", function () {
        const mouseX = event.pageX;
        const mouseY = event.pageY;
        xScale.distortion(2.5).focus(mouseX);
        yScale.distortion(2.5).focus(mouseY);

        dot.call(position);
        svg.select(".x.axis").call(xAxis);
        svg.select(".y.axis").call(yAxis);
    });
})

export default ScatterPlot;