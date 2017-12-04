
import React from 'react';
const d3 = window.d3

export default class JokeList extends React.PureComponent {
    renderJoke = (joke) => {
        const colorScale = d3.scaleLinear()
            .domain([0, 12])
            .range(["black", this.props.color])

        const score_style = {
            backgroundColor: colorScale(joke.score),
        }
        const item_style = {
            border: '2px solid ' + colorScale(joke.score)
        }

        return (
            <div key={joke.id} style={item_style} className="listitem_joke">
                <div style={score_style} className="listitem_left">
                    {Math.round(joke.score * 100) / 100}
                </div>
                <div className="listitem_right listitem_col">
                    <h5 className="listitem_title">{joke.title}</h5>
                    <div className="listitem_body">{joke.body}</div>
                </div>
            </div>
        )
    }

    render() {
        return this.props.data.map(this.renderJoke);
    }
}