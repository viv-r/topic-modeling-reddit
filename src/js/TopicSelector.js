import React from 'react';

export default class TopicSelector extends React.PureComponent {
    changeHandler = (e) => {
        this.props.onChange(+e.target.value)
    }

    renderTopics() {
        const options = [];
        for (let i = 0; i < 50; i++) {
            options.push(
                <option key={i} value={i} > Topic {i + 1}</option>
            )
        }
        return options;
    }

    getClass() {
        return this.props.position === 1 
            ? "selector float_left"
            : "selector float_right"
    }

    render() {
        return (
            <select
                onChange={this.changeHandler}
                value={this.props.value}                
                className={this.getClass()}>
                {this.renderTopics()}                
            </select>
        );
    }
}