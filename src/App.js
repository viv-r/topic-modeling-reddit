import React from 'react'
// import data from './data/reddit_jokes.json'
// import JokeList from './js/JokeList'
import BarChart from './js/BarChart'
import ScatterPlot from './js/ScatterPlot'
import TopicSelector from './js/TopicSelector'
// import Filter from './js/Filter'

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            // data: data.map((d, i) => ({ ...d, id: d.id + i })),
            filter: '',
        };
    }
    onFilterChange = filter => {
        this.setState({
            filter,
        });
    }

    showHelpOverlay = () => {
        alert("balls")
    }

    closeHelpOverlay = () => {

    }

    switchWordJokes(to) {

    }

    render() {
        return (
            <div>
                <nav id="interactions">
                    <TopicSelector id={"topic_a"} />
                    <TopicSelector id={"topic_b"} />

                    <button id="help_button" className="selector word_joke_selector" onClick={this.showHelpOverlay}>?</button>
                </nav>

                <section id="scatter_plot">
                    <h3>Scatter plot shows shit</h3>
                    <ScatterPlot data={null} />
                </section>

                <aside id="bar_Charts">
                    <h3>Topic A</h3>
                    <BarChart data={null} id={"topic_a_bar"}/>
                    <br/>
                    <h3>Topic B</h3>
                    <BarChart data={null} id={"topic_b_bar"} />
                </aside>

                <div id="joke_content">
                    {/* <Filter filter={this.state.filter} onChange={this.onFilterChange} /> */}
                    {/*<JokeList filter={this.state.filter} data={this.state.data} /> */}
                </div>
                <div id="help_overlay">
                </div>
            </div>
        );
    }
}