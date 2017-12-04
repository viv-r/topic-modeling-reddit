import Svg from './Svg';
import React from 'react';
import '../css/tooltip.css';

const d3 = window.d3

export default class Tooltip extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="tooltip"
                style={{
                    top: this.props.tt_top,
                    left: this.props.tt_left,
                    border: "1px solid " + this.props.tt_color,
                    borderTop: "15px solid" + this.props.tt_color,
                    opacity: this.props.tt_opacity,
                }}
            >
                <h4>{this.props.tt_title}</h4>
                <div>
                    {
                        this.props.tt_indicators.map(i => (
                            <div key={i}>
                                <em>{i.name}:</em>{i.value}
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

const Histogram = Svg((node, props) => {

})