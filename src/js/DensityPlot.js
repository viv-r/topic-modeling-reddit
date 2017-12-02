import Svg from './Svg';
import React from 'react';
// import '../css/density.css';

const d3 = window.d3;

export default class DensityPlot extends React.Component {
    render() {
        return (
            <div className="density-container">
                <Graph
                    topicA={this.props.topics[this.props.topicA].scores}
                    topicB={this.props.topics[this.props.topicB].scores}
                    colorA={this.props.topicA_color}
                    colorB={this.props.topicB_color}
                />
            </div>
        );
    }
}

const Graph = Svg((node, props) => {
    var n = 2,
        m = 25,
        stack = d3.stack().keys([0, 1]);

    stack.value(function (d, key) {
        return d[key].y;
    });
    var layers = stack(d3.transpose(d3.range(n).map(function (i) {
        return bumpLayer(i, m);
    }))),
        yStackMax = d3.max(layers, function (layer) { return d3.max(layer, function (d) { return d[1]; }); });
    console.log(yStackMax)

    var margin = { top: 40, right: 10, bottom: 20, left: 10 },
        width = 500 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.scaleLinear()
        .domain([0, 12])
        .range([0, width]);

    var y = d3.scaleLinear()
        .domain([0, 0.4])
        .range([height, 0]);

    var xAxis = d3.axisBottom(x)
        .tickSize(10)
        .tickPadding(6);

    var yAxis = d3.axisLeft(y)
        .tickSize(10)
        .tickPadding(6);

    var svg = d3.select(node);
    svg.selectAll('*').remove();

    svg.attr("width", width + margin.left + margin.right + 80)
        .attr("height", height + margin.top + margin.bottom + 80)
        .style("padding", "40px")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var rect = d3.area().x(function (d, i) { return x(d.data[0].x); })
        .y0(function (d) { return y(d[0]); })
        .y1(function (d) { return y(d[1] - d[0]); })
        .curve(d3.curveBasis)

    svg.selectAll("path").data(layers).enter().append("path").attr("d", rect)
        .style("fill-opacity", 0.5)
        .style("fill", function (d, i) { console.log(i, props); return i ? props.colorA : props.colorB; })
        .style("stroke", "black")

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(0," + 0 + ")")
        .call(yAxis);

    function bumpLayer(topic, bins) {
        const data = topic ? props.topicA : props.topicB;

        const res = new Array(bins).fill(0);
        let count = 0;
        const width = (bins / 11);

        let max = -1;
        for (let i = 0; i < data.length; i++) {
            max = max > data[i] ? max : data[i];
            const bin = Math.floor(data[i] * (width));
            res[bin]++;
            count++;
        }

        for (let i = 0; i < res.length; i++) {
            res[i] = {
                x: (11 / bins) * i,
                y: res[i] / count,
            };
        }
        console.log(res, res.length)
        console.log(max)
        return res;
    }
});


