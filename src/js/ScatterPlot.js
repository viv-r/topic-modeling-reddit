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
                    size={400}
                    data={this.getScatterData()}
                    enableDistortion={this.props.enableDistortion}
                />
            </div>
        );
    }
}

const Graph = Svg((node, props) => {
    const x = d => d.p_topicA * 10;
    const y = d => d.p_topicB * 10;
    const radius = d => Math.log(d.count);
    const color = d => d.p_topicA / (d.p_topicB + d.p_topicA);

    const svg = d3.select(node);
    const width = props.size;
    const height = props.size;

    let line = [];
    for (let i = 1; i < width; i++) {
        line = [...line, { x: i / 40, y: i / 40 }]
    }

    const distortion = (scale) => props.enableDistortion
        ? d3.fisheye.scale(scale)
        : scale();

    const xScale = distortion(d3.scaleLinear)
        .domain([0, 10])
        .range([0, width]);

    const yScale = distortion(d3.scaleLinear)
        .domain([0, 10])
        .range([height, 0]);

    const radiusScale = distortion(d3.scaleLinear)
        .domain([0, 100])
        .range([0, 20]);

    const colorScale = d3.scaleLinear()
        .domain([0, 1])
        .range(['red', 'blue'])

    svg.selectAll("*").remove();
    svg.attr("width", width + 40)
        .attr("height", height + 40)
        .style("margin", 5)
        .style("padding", 15)
        .append("g")

    const xAxis = d3.axisBottom(xScale).tickFormat(d3.format(",d")).tickSize(-height);
    const yAxis = d3.axisLeft(yScale).tickFormat(d3.format(",d")).tickSize(-width);

    svg.append("rect")
        .attr("fill", "#fefefe")
        .attr("width", width)
        .attr("height", height);

    svg.append("g")
        .attr("class", "x axis")
        .attr("stroke", "(3, 3)")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // the red dotted line
    const positionLine = d3.line()
        .curve(d3.curveBasis)
        .x(d => xScale(d.x))
        .y(d => yScale(d.y))

    const drawLineP = () => svg.append("path")
        .attr("class", "sep-line")
        .datum(line)
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("stroke-dasharray", "5 5")
        .attr("d", positionLine);

    let lineP = drawLineP();

    // Add the y-axis.
    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + 0 + ", 0)")
        .call(yAxis);

    // Add an x-axis label.
    svg.append("text")
        .attr("class", "x label")
        .attr("text-anchor", "end")
        .attr("x", width - 6)
        .attr("y", height - 6)
        .text("Topic A");

    // Add a y-axis label.
    svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("x", -6)
        .attr("y", 6)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Topic B");

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
        dot.attr("cx", d => xScale(x(d)))
            .attr("cy", d => yScale(y(d)))
            .attr("r", d => radiusScale(radius(d)))
    }

    svg.on("mousemove", function () {
        if (!props.enableDistortion) return;
        const mouseX = event.pageX;
        const mouseY = event.pageY;
        xScale.distortion(2.5).focus(mouseX);
        yScale.distortion(2.5).focus(mouseY);

        dot.call(position);

        lineP.remove();
        lineP = drawLineP();

        svg.select(".x.axis").call(xAxis);
        svg.select(".y.axis").call(yAxis);
    });
})
