import Svg from './Svg';
import React from 'react';
import '../css/tooltip.css';

const d3 = window.d3

export default class Tooltip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {            
            color: "#5C7080",
            left : -1,
            top: -1,
            opacity: 0,
            title: "",
            indicators: []
        }
    }

    render() {
        return (
            <div
                style={{
                    top: this.state.top,
                    left: this.state.left,
                    border: "1px solid " + this.state.color,
                    borderTop: "15px solid" + this.state.color,
                    opacity: this.state.opacity,
                }}
            >
                <h4>{this.state.title}</h4>
                <p>
                    {
                        this.state.indicators.map(i => (
                            <div style="tooltip_indicator">
                                <em>{i.name}:</em>{i.value}
                            </div>
                        ))
                    }
                </p>
            </div>
        )
    }
}

const Histogram = Svg((node, props) => {

})