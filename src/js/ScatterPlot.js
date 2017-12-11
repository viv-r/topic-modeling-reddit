/* eslint-disable */
import './Fisheye';
import Svg from './Svg';
import React from 'react';
import '../css/scatter.css';

const d3 = window.d3;
const points = 50;
let line = [];
for (let i = 0; i < points - 1; i++) {
    const a = i * 4000 / points;
    line.push({ x: a, y: a });
}

export default class Scatter extends React.Component {
    shouldComponentUpdate(nextProps) {
        return (
            this.props.enableDistortion !== nextProps.enableDistortion ||
            this.props.topicA !== nextProps.topicA ||
            this.props.topicA_color !== nextProps.topicA_color ||
            this.props.topicB !== nextProps.topicB ||
            this.props.topicB_color !== nextProps.topicB_color
        )
    }

    getScatterData() {
        let maxA = -1;
        const tA = this.props.topics[this.props.topicA].words.map(v => {
            maxA = maxA > v.prob ? maxA : v.prob;
            return {
                p_topicA: v.count_topic,
                count: v.count,
                name: v.name
            }
        });
        let maxB = -1;
        const tB = this.props.topics[this.props.topicB].words.map(v => {
            maxB = maxB > v.prob ? maxB : v.prob;
            return {
                p_topicB: v.count_topic,
                count: v.count,
                name: v.name
            }
        });
        const words = [...tA, ...tB];

        let wordMap = {}
        for (let i = 0; i < words.length; i++) {
            const val = words[i];
            wordMap[val.name] = {
                ...(wordMap[val.name] || {}),
                ...val
            }
        }

        const scatter = Object.keys(wordMap).map(k => wordMap[k]).map(v => {
            const pa = v.p_topicA || 0;
            const pb = v.p_topicB || 0;

            return {
                ...v,
                p_topicA: pa,
                p_topicB: pb,
            };
        });
        return scatter;
    }

    render() {
        return (
            <div className="scatter-container">
                <Graph
                    size={450}
                    data={this.getScatterData()}
                    enableDistortion={this.props.enableDistortion}
                    ta_color={this.props.topicA_color}
                    tb_color={this.props.topicB_color}
                    ta_num={this.props.topicA}
                    tb_num={this.props.topicB}
                />
            </div>
        );
    }
}


const Graph = Svg((node, props) => {
    const x = d => d.p_topicB * 10;
    const y = d => d.p_topicA * 10;
    const radius = d => Math.log(d.count) + (props.enableDistortion ? 0 : 15);
    const color = d => d.p_topicA / (d.p_topicB + d.p_topicA);

    const svg = d3.select(node);
    const size = props.size;

    const zoom = d3.zoom()
        .scaleExtent([1, 12500])
        // .translateExtent([0, 0], [1000, size])
        .on("zoom", zoomed);

    const distortion = (scale) => props.enableDistortion
        ? d3.fisheye.scale(scale)
        : scale();

    let xScale = distortion(d3.scaleLinear)
        .domain([0, 2000])
        .range([0, size]);

    let yScale = distortion(d3.scaleLinear)
        .domain([0, 2000])
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
        .style("padding", 15)
        .append("g")

    let xAxis = d3.axisBottom(xScale).tickFormat(d3.format(",d")).tickSize(-size);
    let yAxis = d3.axisLeft(yScale).tickFormat(d3.format(",d")).tickSize(-size);

    const view = svg.append("rect")
        .attr("fill", "#fefefe")
        .attr("width", size)
        .attr("height", size)
        .call(zoom)

    var mask = svg.append("defs")
        .append("clipPath")
        .attr("id", "clip")
        .style("pointer-events", "none")
        .append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", size)
        .attr("height", size)

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
        .attr("clip-path", "url(#clip)")
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
        .text("Topic " + (props.ta_num + 1));

    // Add a y-axis label.
    svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("x", -6)
        .attr("y", 6)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Topic " + (props.tb_num + 1));

    // Add a dot per word and set the colors
    var dot = svg.append("g")
        .attr("class", "dots")
        .attr("clip-path", "url(#clip)")
        .selectAll(".dot")
        .data(props.data)
        .enter().append("circle")
        .on("mouseover", function (d) {
            d3.select("#tooltip")
                .html(
                "<h4>" + d.name + "</h4>" +
                "<p><em>occurrences in topic A:</em>" + d.p_topicA +
                "</br><em>occurrences of topic B:</em>" + d.p_topicB +
                "</br><em>occurrences in all topics:</em> " + d.count +
                "</p>"
                )
                .attr('style',
                'opacity:.95;border: 1px solid ' + colorScale(color(d)) +
                ';border-top: 15px solid ' + colorScale(color(d)) +
                ';top:' + (d3.event.clientY - 10) +
                'px;left:' + (d3.event.clientX + 10) + "px;" +
                'width: 250px;height:120px')
        })
        .on("mouseout", function (d) {
            d3.select("#tooltip")
                .attr('style',
                'opacity:0;border: 1px solid ' + colorScale(color(d)) +
                ';border-top: 15px solid ' + colorScale(color(d)) +
                ';top:' + (d3.event.clientY - 10) +
                'px;left:' + (d3.event.clientX + 10) + "px;width:250px;height:120px")
        })
        .attr("class", "dot")
        .style("fill", function (d) { return colorScale(color(d)); })
        .call(position)
        .sort(function (a, b) { return radius(b) - radius(a); });

    // Positions the dots based on data.
    function position(dot, xs, ys) {
        dot.attr("cx", d => (xs || xScale)(x(d)))
            .attr("cy", d => (ys || yScale)(y(d)));

        if (!xs) dot.attr("r", d => radiusScale(radius(d)))
    }

    function zoomed() {
        const xs = d3.event.transform.rescaleX(xScale)
        const ys = d3.event.transform.rescaleY(yScale)

        gX.call(xAxis.scale(xs));
        gY.call(yAxis.scale(ys));

        lineP.attr('d', d3.line()
            .curve(d3.curveBasis)
            .x(d => xs(d.x))
            .y(d => ys(d.y)));
        dot.call(position, xs, ys);
    }

    svg.on("mousemove", function () {
        if (!props.enableDistortion) return;
        let mouseX = event.pageX - 30;
        let mouseY = event.pageY - 70;
        mouseX = Math.max(0, mouseX)
        mouseX = Math.min(size, mouseX)
        mouseY = Math.max(0, mouseY)
        mouseY = Math.min(size, mouseY)
        const d = 7.5;
        xScale.distortion(d).focus(mouseX);
        yScale.distortion(d).focus(mouseY);

        dot.call(position);

        lineP.remove();
        lineP = drawLineP();

        svg.select(".x.axis").call(xAxis);
        svg.select(".y.axis").call(yAxis);
    });
})
