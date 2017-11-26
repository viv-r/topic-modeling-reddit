
import React from 'react'
import FlipMove from 'react-flip-move'
import JokeItem from './JokeItem'

export default class JokeList extends React.PureComponent {
    renderJoke(joke) {
        return <JokeItem key={joke.id} joke={joke} />
    }

    render() {
        const filter = (this.props.filter || '').toLowerCase()
        const data = this.props.data.filter(d => (
            (d.title || '').includes(filter) || (d.body || '').includes(filter)
        ))

        return (
            <FlipMove enterAnimation="accordionVertical" leaveAnimation="accordionVertical">
                {data.map(this.renderJoke)}
            </FlipMove>
        );
    }
}