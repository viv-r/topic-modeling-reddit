/* eslint-disable */
import './Fisheye';
import Svg from './Svg';
import React from 'react';
import '../css/scatter.css';

const d3 = window.d3;

export default class Scatter extends React.Component {

    getScatterData() {
        let maxA = -1;
        const tA = this.props.topics[this.props.topicA].words.map(v => {
            maxA = maxA > v.prob ? maxA : v.prob;
            return {
                p_topicA: v.prob,
                count: v.count,
                name: v.name
            }
        });
        let maxB = -1;
        const tB = this.props.topics[this.props.topicB].words.map(v => {
            maxB = maxB > v.prob ? maxB : v.prob;
            return {
                p_topicB: v.prob,
                count: v.count,
                name: v.name
            }
        });
        const words = [...tA, ...tB];

        let wordMap = words.reduce((map, val) => ({
            ...map,
            [val.name]: {
                ...(map[val.name] || {}),
                ...val
            }
        }), {});

        const scatter = Object.keys(wordMap).map(k => wordMap[k]).map(v => {
            const pa = v.p_topicA || 0;
            const pb = v.p_topicB || 0;

            return {
                ...v,
                p_topicA: pa / maxA,
                p_topicB: pb / maxB,
            };
        });
        return scatter;
    }

    render() {
        return (
            <div className="scatter-container">
                <Graph
                    data={this.getScatterData()}
                    enableDistortion={this.props.enableDistortion}
                />
            </div>
        );
    }
}

const Graph = Svg((node, props) => {
    function x(d) { return d.p_topicA * 10; }
    function y(d) { return d.p_topicB * 10; }
    function radius(d) { return Math.log(d.count); }
    function color(d) { return d.p_topicA; }

    // Chart dimensions.
    var margin = { top: 0, right: 10, bottom: 20, left: 50 },
        width = 400,
        height = 400;

    let line = [];
    for (let i = 1; i < width; i++) {
        line = [...line, { x: i / 40, y: i / 40 }]
    }

    const distortion = (scale) => props.enableDistortion
        ? d3.fisheye.scale(scale)
        : scale();

    var xScale = distortion(d3.scaleLinear).domain([0, 10]).range([0, width]),
        yScale = distortion(d3.scaleLinear).domain([0, 10]).range([height, 0]);
    var radiusScale = distortion(d3.scaleLinear).domain([0, 100]).range([0, 20]);

    const colorScale = d3.scaleLinear()
        .domain([0, 1])
        .range(['red', 'blue'])

    var svg = d3.select(node);

    svg.selectAll("*").remove();
    svg.attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var xAxis = d3.axisBottom(xScale).tickFormat(d3.format(",d")).tickSize(-height),
        yAxis = d3.axisRight(yScale).tickSize(-width);

    svg.append("rect")
        .attr("fill", "none")
        .attr("width", width)
        .attr("height", height);

    svg.append("g")
        .attr("class", "x axis")
        .attr("stroke", "(3, 3)")
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
        .attr("stroke", "red")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("stroke-dasharray", "5 5")
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
    var dot = svg.append("g")
        .attr("class", "dots")
        .selectAll(".dot")
        .data(props.data)
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
        if (!props.enableDistortion) return;
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
