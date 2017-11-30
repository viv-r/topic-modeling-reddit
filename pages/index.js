import React from 'react'
import data from '../data/reddit_jokes.json'
import JokeList from '../js/JokeList'
import BarChart from '../js/BarChart'
import ScatterPlot from '../js/ScatterPlot'
import TopicSelector from '../js/TopicSelector'
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

    showHelpOverlay = () => {
        
    }

    closeHelpOverlay = () => {

<<<<<<< HEAD
=======
    }

    switchWordJokes(to) {

>>>>>>> f2e747eca31aace25629ad7785133aa586129b01
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Topic Modeling the Reddit Jokeset</title>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
                    <script src="http://d3js.org/d3.v3.min.js"></script>
                    <link rel="stylesheet" href="/static/index.css" />
                </Head>
                <div>
                    <nav id="interactions">
                        <TopicSelector id={"topic_a"} />
                        <TopicSelector id={"topic_b"} />

                        <button id="help_button" className="selector word_joke_selector" onClick={this.showHelpOverlay}>?</button>
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
<<<<<<< HEAD
                
                <div id="help_overlay" hidden>
=======

                <div id="help_overlay">
>>>>>>> f2e747eca31aace25629ad7785133aa586129b01
                    <button id="help_close" className="selector word_joke_selector" onChange={this.closeHelpOverlay}>X</button>
                </div>
            </div>
        );
    }
}