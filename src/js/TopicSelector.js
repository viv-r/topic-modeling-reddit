import React from 'react';

export default class TopicSelector extends React.PureComponent {
    changeHandler = (e) => {
        this.props.onChange(e.value)
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

    render() {
        return (
            <select
                id={this.props.id}
                onChange={this.changeHandler.bind(this)}
                value={this.props.value}
                className="selector topic_selector">
                {this.renderTopics()}
            </select>
        );
    }
}