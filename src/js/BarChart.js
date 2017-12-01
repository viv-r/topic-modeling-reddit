import Svg from './Svg';
const d3 = window.d3;

const BarChart = Svg((node, props) => {
    const bars = 4;
    const data = [];
    for (let i = 0; i < bars; i++) data.push(Math.random());

    props = { ...props, width: 200, height: 200, barWidth: 35, barSpacing: 5, data };

    const size = [props.width, props.height];

    const dataMax = d3.max(props.data)
    const yScale = d3.scaleLinear()
        .domain([0, dataMax])
        .range([0, size[1]])

    const fill = (d, i) => i % 2 === 0 ? '#444' : '#333';

    d3.select(node)
        .selectAll('rect')
        .data(props.data)
        .enter()
        .append('rect')
            .attr('y', (d, i) => i * (props.barWidth + props.barSpacing))
            .attr('x', d => 0)
            .attr('width', d => yScale(d))
            .attr('height', props.barWidth)
            .style('fill', fill)
            .on('mouseover', (data, index, nodes) => {
                d3.select(nodes[index])
                    .style('fill', '#5555aa')
            })
            .on('mouseout', function (data, index, nodes) {
                d3.select(nodes[index])
                    .transition()
                    .duration(200)
                    .style('fill', fill)
            })
});

export default BarChart;