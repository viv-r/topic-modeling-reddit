import React from 'react'
// import data from './data/reddit_jokes.json'
// import JokeList from './js/JokeList'
import BarChart from './js/BarChart'
import ScatterPlot from './js/ScatterPlot'
import TopicSelector from './js/TopicSelector'
import { Button, Dialog } from "@blueprintjs/core"
// import Filter from './js/Filter'

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        let topics = [];
        for (let i = 0; i < 50; i++) {
            let t = require(`./data/topic_files/topic_${i + 1}.json`);
            topics = [...topics, t];
        }

        // initial app state
        this.state = {
            topics,
            topicA: 1,
            topicB: 2,
            topicA_color: 'red',
            topicB_color: 'blue',
            enableDistortion: false,
            isOpen: false, // help dialog
        }
    }

    setTopicA = (topicA) => {
        this.setState({
            topicA
        })
    }

    setTopicB = (topicB) => {
        this.setState({
            topicB
        })
    }

    closeHelpOverlay = () => {

    }

    switchWordJokes(to) {

    }

    toggleOverlay = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleDistortion = () => {
        this.setState({
            enableDistortion: !this.state.enableDistortion
        })
    }

    render() {
        return (
            <div>
                <nav id="interactions">
                    <Button text={"D"} onClick={this.toggleDistortion} className={"selector small float_left"} />

                    <TopicSelector id="topic_a" value={this.state.topicA} onChange={this.setTopicA} />
                    <TopicSelector id="topic_b" value={this.state.topicB} onChange={this.setTopicB} />

                    <Button text="?" onClick={this.toggleOverlay} className={"selector small float_right"} />

                    <Dialog
                        isOpen={this.state.isOpen}
                        onClose={this.toggleOverlay}
                        hasBackdrop={true}
                        title={"Help"} >
                    </Dialog>
                </nav>

                <section id="scatter_plot">
                    <ScatterPlot {...this.state} />
                </section>

                <aside id="bar_Charts">
                    <h3>Topic A</h3>
                    <BarChart {...this.state} topic={1} />
                    <br />
                    <h3>Topic B</h3>
                    <BarChart {...this.state} topic={2} />
                </aside>

                <div id="joke_content">
                    {/*<JokeList filter={this.state.filter} data={this.state.data} /> */}
                </div>
            </div >
        );
    }
}