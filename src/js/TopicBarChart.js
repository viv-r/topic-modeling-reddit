import Svg from './Svg';
import React from 'react';
import '../css/bar_charts.css';

const d3 = window.d3;

export default class TopicBarChart extends React.Component {
    render() {
        return (
            <div className="topic-bar-container">
                <Graph
                    data={this.props.topicScores.topic_scores}
                    topicA={this.props.topicA}
                    topicB={this.props.topicB}
                    colorA={this.props.topicA_color}
                    colorB={this.props.topicB_color}
                />
            </div>
        );
    }
}

const Graph = Svg((node, props) => {
    // chart dimensions
    var width = 600,
        height = 250,
        barWidth = 10,
        barSpacing = 1;

    const dataMax = d3.max(props.data);

    const color = (d, i) => {
        if (i === props.topicA) return colorScale(0)
        if (i === props.topicB) return colorScale(1)
        return "#394B59"
    }

    function prob(d) { return d; }

    const lengthScale = d3.scaleLinear()
        .domain([0, dataMax])
        .range([0, height])

    var svg = d3.select(node);
    svg.selectAll('*').remove();

    svg.attr('height', height)
    svg.attr('width', width)

    const colorScale = d3.scaleLinear()
        .domain([0, 1])
        .range([props.colorA, props.colorB])
   
    // add bars
    svg.selectAll('rect')
        .data(props.data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * (barWidth + barSpacing))
        .attr('height', d => lengthScale(prob(d)))
        .attr('y', d => height - lengthScale(prob(d)))
        .attr('width', barWidth)
        .style('fill', (d, i) => color(d, i))
        .on('mouseover', (data, index, nodes) => {
            d3.select(nodes[index])
                .style('fill', "#5C7080")
            d3.select("#tooltip")
                .html("<h4>Topic " + index + "</h4>" +
                    "<p><em>average score:</em> " + data +
                    "</p>")
        })
        .on('mouseout', function (data, index, nodes) {
            
            d3.select(nodes[index])
                .transition()
                .duration(200)
                .style('fill', color(data, index));

            d3.select("#tooltip")
                .attr('style',
                'opacity:0;border: 2px solid ' + "#5C7080" +
                ';border-top: 15px solid ' + "#5C7080" +
                ';top:' + (d3.event.clientY + 250) +
                'px;left:' + (d3.event.clientX + 10) + "px")
        })
        .on('mousemove', function (data, index, nodes) {
            d3.select("#tooltip")
                .attr('style',
                'opacity:.95;border: 2px solid ' + "#5C7080" +
                ';border-top: 15px solid ' + "#5C7080" +
                ';top:' + (d3.event.clientY + 250) +
                'px;left:' + (d3.event.clientX + 10) + "px")
        })
});