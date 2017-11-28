import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import 'd3-transition';
import Svg from './Svg';

const DensityPlot = Svg((node, props) => {
    const bars = Math.random() * 100 + 250;
    const data = [];
    for (let i = 0; i < bars; i++) data.push(Math.random());


    props = { ...props, width: 200, height: 60, barWidth: 10, barSpacing: 3, data };

    const size = [props.width, props.height];

    const dataMax = max(props.data)
    const yScale = scaleLinear()
        .domain([0, dataMax])
        .range([0, size[1]])

    const fill = (d, i) => i % 2 == 0 ? '#444' : '#333';

    select(node)
        .selectAll('rect')
        .remove()

    select(node)
        .selectAll('rect')
        .data(props.data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * (props.barWidth + props.barSpacing))
        .attr('y', d => size[1] - yScale(d))
        .attr('height', d => yScale(d))
        .attr('width', props.barWidth)
        .style('fill', fill)
        .on('mouseover', (data, index, nodes) => {
            select(nodes[index])
                .style('fill', '#5555aa')
        })
        .on('mouseout', function (data, index, nodes) {
            select(nodes[index])
                .transition()
                .duration(200)
                .style('fill', fill)
        })
});

export default DensityPlot;