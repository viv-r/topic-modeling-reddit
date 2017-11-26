import React from 'react'
import data from '../data/reddit_jokes.json'
import JokeList from '../js/JokeList'
import Filter from '../js/Filter'

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            data: data.map((d, i) => ({ ...d, id: d.id + i })),
            filter: '',
        };
    }
    onFilterChange = filter => {
        console.log("filter: ", filter)
        this.setState({
            filter,
        });
    }

    render() {
        return (
            <div>
                <Filter filter={this.state.filter} onChange={this.onFilterChange} />
                <JokeList filter={this.state.filter} data={this.state.data} />
            </div>
        );
    }
}