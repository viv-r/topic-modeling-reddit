import React from 'react'
import data from '../data/reddit_jokes.json'
import JokeList from '../js/JokeList'
import DensityPlot from '../js/DensityPlot'
import ScatterPlot from '../js/ScatterPlot'
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
        this.setState({
            filter,
        });
    }

    render() {
        return (
            <div>
                <nav id="interactions">
                    <select id="topic_a_selector" class="selector topic_selector">
                        <option value="1" selected>Topic 1</option>
                        <option value="2">Topic 2</option>
                        <option value="3">Topic 3</option>
                    </select>
                    <select id="topic_b_selector" class="selector topic_selector">
                        <option value="1">Topic 1</option>
                        <option value="2" selected>Topic 2</option>
                        <option value="3">Topic 3</option>
                    </select>
                    <button id="word_selector" class="selector word_joke_selector active" onclick="switch_word_joke_filter(0)">words</button>
                    <button id="joke_selector" class="selector word_joke_selector" onclick="switch_word_joke_filter(1)">jokes</button>

                    <select id="size_mapping" class="selector topic_selector">
                        <option value="frequency">count</option>
                        <option value="score">score</option>
                        <option value="tfidf">tf/idf</option>
                    </select>
                </nav>
                <div>
                    <DensityPlot data={data} />
                </div>
                <div>
                    <ScatterPlot data={data} />
                </div>
                <Filter filter={this.state.filter} onChange={this.onFilterChange} />
                <JokeList filter={this.state.filter} data={this.state.data} />
            </div>
        );
    }
}