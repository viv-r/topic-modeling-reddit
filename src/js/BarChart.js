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

<<<<<<< HEAD:js/BarChart.js
    select(node)
=======
    d3.select(node)
>>>>>>> a240aef24be6091b197bbd4c0f66020968fc2831:src/js/BarChart.js
        .attr('id', props.id)
        .selectAll('rect')
        .remove()

    d3.select(node)
        .selectAll('rect')
        .data(props.data)
        .enter()
        .append('rect')
<<<<<<< HEAD:js/BarChart.js
            .attr('y', (d, i) => i * (props.barWidth + props.barSpacing))
            .attr('x', d => 0)
            .attr('width', d => yScale(d))
            .attr('height', props.barWidth)
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
=======
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
>>>>>>> a240aef24be6091b197bbd4c0f66020968fc2831:src/js/BarChart.js
});

export default BarChart;