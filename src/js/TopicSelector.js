import React from 'react';

export default class TopicSelector extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    changeHandler = (e) => {
        this.setState({
            value: e.value
        });
    }

    renderTopics() {
        const options = [];
        for (let i = 0; i < 50; i++) {
            options.push(
                <option value={i} > Topic {i + 1}</option>
            )
        }
        return options;
    }

    render() {
        return (
            <select
                id={this.props.id}
                onChange={this.changeHandler.bind(this)}
                value={this.state.value}
                className="selector topic_selector">
                {this.renderTopics()}
            </select>
        );
    }
}