/* eslint-disable */
import './Fisheye';
import Svg from './Svg';
import React from 'react';
import '../css/scatter.css';

const d3 = window.d3;

export default class Scatter extends React.Component {
    render() {
        return (
            <div className="scatter-container">
                <Graph {...this.props} />
            </div>
        );
    }
}

const Graph = Svg((node, props) => {
    // Various accessors that specify the four dimensions of data to visualize.
    function x(d) { return d.p_topicA * 10; }
    function y(d) { return d.p_topicB * 10; }
    function radius(d) { return Math.log(d.count); }
    function color(d) { return d.p_topicA; }

    // Chart dimensions.
    var margin = { top: 0, right: 10, bottom: 20, left: 50 },
        width = 400,
        height = 400;
    // let line = [{ x: 2, y: 2 }, { x: 4, y: 4 }, { x: 8, y: 8 }];
    let line = [];
    for (let i = 1; i < width; i++) {
        line = [...line, { x: i / 40, y: i / 40 }]
    }

    // Various scales and distortions.
    var xScale = d3.fisheye.scale(d3.scaleLinear).domain([0, 10]).range([0, width]),
        yScale = d3.fisheye.scale(d3.scaleLinear).domain([0, 10]).range([height, 0]);
    var radiusScale = d3.fisheye.scale(d3.scaleLinear).domain([0, 100]).range([0, 20]);

    // var xScale = scaleLog().domain([300, 1e2]).range([0, width]),
    //     yScale = scaleLinear().domain([20, 90]).range([height, 0]);

    const colorScale = d3.scaleLinear()
        .domain([0, 1])
        .range(['red', 'blue'])

    // Create the SVG container and set the origin.
    var svg = d3.select(node);

    svg.selectAll("*").remove();
    svg.attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // The x & y axes.
    var xAxis = d3.axisBottom(xScale).tickFormat(d3.format(",d")).tickSize(-height),
        yAxis = d3.axisRight(yScale).tickSize(-width);

    // Add a background rect for mousemove.
    svg.append("rect")
        .attr("fill", "none")
        .attr("width", width)
        .attr("height", height);

    // Add the x-axis.
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // the red dotted line
    // Define the line
    var positionLine = d3.line()
        .curve(d3.curveBasis)
        .x(function (d) { return xScale(d.x); })
        .y(function (d) { return yScale(d.y); })

    var lineP = svg.append("path")
        .attr("class", "sep-line")
        .datum(line)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("d", positionLine)


    // Add the y-axis.
    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + width + ", 0)")
        .call(yAxis);

    // // Add an x-axis label.
    // svg.append("text")
    //     .attr("class", "x label")
    //     .attr("text-anchor", "end")
    //     .attr("x", width - 6)
    //     .attr("y", height - 6)
    //     .text("probability towards second selected topic");

    // // Add a y-axis label.
    // svg.append("text")
    //     .attr("class", "y label")
    //     .attr("text-anchor", "end")
    //     .attr("x", -6)
    //     .attr("y", 6)
    //     .attr("dy", ".75em")
    //     .attr("transform", "rotate(-90)")
    //     .text("probability towards first selected topic");

    // Add a dot per word and set the colors
    console.log(props)
    var dot = svg.append("g")
        .attr("class", "dots")
        .selectAll(".dot")
        .data(props.data)
        // [{
        //     c_topic: 1,
        //     p_topicA: .20,
        //     p_topicB: .20,
        //     frequency: 20
        // }, {
        //     c_topic: 2,
        //     p_topicA: .60,
        //     p_topicB: .40,
        //     frequency: 40
        // }, {
        //     c_topic: 3,
        //     p_topicA: .10,
        //     p_topicB: .10,
        //     frequency: 10
        // }])
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

        lineP.remove();
        lineP = svg.append("path")
            .datum(line)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("d", positionLine)

        svg.select(".x.axis").call(xAxis);
        svg.select(".y.axis").call(yAxis);
    });
})
