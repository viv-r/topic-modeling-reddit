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
    var width = 1200,
        height = 250,
        barWidth = 10,
        barSpacing = 1;

    const dataMax = d3.max(props.data);

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


    // add words
    svg.selectAll('g')
        .data(props.data)
        .enter()
        .append('text')
        .attr('x', (d, i) => i * (barWidth + barSpacing))
        .attr('dx', '1em')
        .attr('y', d => height)
        .attr('class', 'bar-title')
        .attr("transform", "rotate(-90)")
        .text(function (d, i) { return "Topic " + i; })

    const color = (d, i) => {
        console.log(props, i)
        if (i === props.topicA) return colorScale(0)
        if (i === props.topicB) return colorScale(1)
        return colorScale(0.5);
    }
    // add bars
    svg.selectAll('rect')
        .data(props.data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * (barWidth + barSpacing))
        .attr('height', d => lengthScale(prob(d)))
        .attr('y', d => height - lengthScale(prob(d)))
        .attr('width', barWidth)
        .style('fill', color)
        .on('mouseover', (data, index, nodes) => {
            d3.select(nodes[index])
                .style('fill', '#444')

            d3.select("#tooltip")
                .html(
                "<h4>" + data.name + "</h4>" +
                "<p><em>probability:</em> " + data.p_topic +
                "</br><em>count:</em> " + data.count +
                "</p>"
                )

        })
        .on('mouseout', function (data, index, nodes) {

            var col = color(data, index);
            d3.select(nodes[index])
                .transition()
                .duration(200)
                .style('fill', col);

            d3.select("#tooltip")
                .attr('style',
                'opacity:0;border: 2px solid ' + col +
                ';border-top: 15px solid ' + col +
                ';top:' + (d3.event.clientY - 10) +
                'px;left:' + (d3.event.clientX + 10) + "px")
        })
        .on('mousemove', function (data, index, nodes) {
            var col = colorScale(prob(data))
            d3.select("#tooltip")
                .attr('style',
                'opacity:.95;border: 2px solid ' + col +
                ';border-top: 15px solid ' + col +
                ';top:' + (d3.event.clientY - 10) +
                'px;left:' + (d3.event.clientX + 10) + "px")
        })
});