import React from 'react'
import data from '../data/reddit_jokes.json'
import JokeList from '../js/JokeList'
import BarChart from '../js/BarChart'
import ScatterPlot from '../js/ScatterPlot'
import Filter from '../js/Filter'
import Head from 'next/head'

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
                <Head>
                    <title>Topic Modeling the Reddit Jokeset</title>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
                    <script src="http://d3js.org/d3.v3.min.js"></script>
                    <link rel="stylesheet" href="http://localhost:3001/css/index.css" />
                </Head>
                <div>
                    <nav id="interactions">
                        <select id="topic_a_selector" className="selector topic_selector">
                            <option value="1" selected>Topic 1</option>
                            <option value="2">Topic 2</option>
                            <option value="3">Topic 3</option>
                        </select>
                        <select id="topic_b_selector" className="selector topic_selector">
                            <option value="1">Topic 1</option>
                            <option value="2" selected>Topic 2</option>
                            <option value="3">Topic 3</option>
                        </select>
                        <button id="word_selector" className="selector word_joke_selector active" onclick="switch_word_joke_filter(0)">words</button>
                        <button id="joke_selector" className="selector word_joke_selector" onclick="switch_word_joke_filter(1)">jokes</button>

                        <select id="size_mapping" className="selector topic_selector">
                            <option value="frequency">count</option>
                            <option value="score">score</option>
                        </select>
                    </nav>

                    <div id="content_left">
                        <div id="scatter_plot">
                            <ScatterPlot data={data} />
                        </div>
                    </div>

                    <div id="content_right">
                        <BarChart data={data} />
                    </div>

                    <div id="joke_content">
                        <Filter filter={this.state.filter} onChange={this.onFilterChange} />
                        {/* <JokeList filter={this.state.filter} data={this.state.data} /> */}
                    </div>
                </div>
            </div>
        );
    }
}