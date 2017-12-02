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
                    size={420}
                    data={this.getScatterData()}
                    enableDistortion={this.props.enableDistortion}
                    ta_color={this.props.topicA_color}
                    tb_color={this.props.topicB_color}
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
    const size = props.size;

    let line = [];
    for (let i = 1; i < size - 20; i++) {
        line = [...line, { x: i / 40, y: i / 40 }]
    }
    const zoom = d3.zoom()
        .scaleExtent([1, 100])
        // .translateExtent([[90, 90], [size - 40, size - 40]])
        .on("zoom", zoomed);

    const distortion = (scale) => props.enableDistortion
        ? d3.fisheye.scale(scale)
        : scale();

    const xScale = distortion(d3.scaleLinear)
        .domain([0, 10])
        .range([0, size]);

    const yScale = distortion(d3.scaleLinear)
        .domain([0, 10])
        .range([size, 0]);

    const radiusScale = distortion(d3.scaleLinear)
        .domain([0, 100])
        .range([0, 20]);

    const colorScale = d3.scaleLinear()
        .domain([0, 1])
        .range([props.ta_color, props.tb_color])

    svg.selectAll("*").remove();
    svg.attr("width", size + 40)
        .attr("height", size + 40)
        // .style("margin", 5)
        .style("padding", 15)
        .append("g")

    const xAxis = d3.axisBottom(xScale).tickFormat(d3.format(",d")).tickSize(-size);
    const yAxis = d3.axisLeft(yScale).tickFormat(d3.format(",d")).tickSize(-size);

    var mask = svg.append("defs")
        .append("clipPath")
        .attr("id", "mask")
        .style("pointer-events", "none")
        .append("rect")
        .attr({
            x: 0,
            y: 0,
            width: size,
            height: size,
        })
    const view = svg.append("rect")
        .attr("fill", "#fefefe")
        .attr("width", size)
        .attr("height", size)
        .attr("clip-path", "url(#mask)")
        .call(zoom)

    const gX = svg.append("g")
        .attr("class", "x axis")
        .attr("stroke", "(3, 3)")
        .attr("transform", "translate(0," + size + ")")
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
    const gY = svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + 0 + ", 0)")
        .call(yAxis);

    // Add an x-axis label.
    svg.append("text")
        .attr("class", "x label")
        .attr("text-anchor", "end")
        .attr("x", size - 6)
        .attr("y", size - 6)
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
        .on("mouseover", function (d) {
            d3.select("#tooltip")
                .html(
                "<h4>" + d.name + "</h4>" +
                "<p><em>probability of topic A:</em>" + d.p_topicA.toFixed(4) +
                "</br><em>probability of topic B:</em>" + d.p_topicB.toFixed(4) +
                "</br><em>count:</em> " + d.count +
                "</p>"
                )
                .attr('style',
                'opacity:.95;border: 2px solid ' + colorScale(color(d)) +
                ';border-top: 15px solid ' + colorScale(color(d)) +
                ';top:' + (d3.event.clientY - 10) +
                'px;left:' + (d3.event.clientX + 10) + "px;" +
                'width: 250px;height:120px')
        })
        .on("mouseout", function (d) {
            d3.select("#tooltip")
                .attr('style',
                'opacity:0;border: 2px solid ' + colorScale(color(d)) +
                ';border-top: 15px solid ' + colorScale(color(d)) +
                ';top:' + (d3.event.clientY - 10) +
                'px;left:' + (d3.event.clientX + 10) + "px")
        })
        .attr("class", "dot")
        .style("fill", function (d) { return colorScale(color(d)); })
        .call(position)
        .sort(function (a, b) { return radius(b) - radius(a); });

    // Positions the dots based on data.
    function position(dot) {
        dot.attr("cx", d => xScale(x(d)))
            .attr("cy", d => yScale(y(d)))
            .attr("r", d => radiusScale(radius(d)))
    }


    function zoomed() {
        dot.attr("transform", d3.event.transform);
        lineP.attr("transform", d3.event.transform);
        gX.call(xAxis.scale(d3.event.transform.rescaleX(xScale)));
        gY.call(yAxis.scale(d3.event.transform.rescaleY(yScale)));
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
