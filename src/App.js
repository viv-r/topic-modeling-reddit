import React from 'react'
// import data from './data/reddit_jokes.json'
// import JokeList from './js/JokeList'
import BarChart from './js/BarChart'
import ScatterPlot from './js/ScatterPlot'
import TopicSelector from './js/TopicSelector'
// import Filter from './js/Filter'

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        let topics = [];
        for (let i = 0; i < 50; i++) {
            let t = require(`./data/topic_files/topic_${i + 1}.json`);
            topics = [...topics, t];
        }

        this.state = {
            topics,
            topicA: 0,
            topicB: 1,
        }
    }

    getScatterData() {
        let maxA = -1;
        const tA = this.state.topics[this.state.topicA].words.map(v => {
            maxA = maxA > v.prob ? maxA : v.prob;
            return {
                p_topicA: v.prob,
                count: v.count,
                name: v.name
            }
        });
        let maxB = -1;
        const tB = this.state.topics[this.state.topicB].words.map(v => {
            maxB = maxB > v.prob ? maxB : v.prob;
            return {
                p_topicB: v.prob,
                count: v.count,
                name: v.name
            }
        });
        const words = [...tA, ...tB];
        console.log(maxA, maxB)

        let wordMap = words.reduce((map, val) => ({
            ...map,
            [val.name]: {
                ...(map[val.name] || {}),
                ...val
            }
        }), {});

        const scatter = Object.keys(wordMap).map(k => wordMap[k]).map(v => {
            const pa = v.p_topicA || 0;
            const pb = v.p_topicB || 0;

            return {
                ...v,
                p_topicA: pa, //maxA,
                p_topicB: pb //maxB,
            };
        });
        return scatter;
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
                    <TopicSelector id="topic_a" value={this.state.topicA} onChange={this.setTopicA} />
                    <TopicSelector id="topic_b" value={this.state.topicB} onChange={this.setTopicB} />

                    <button id="help_button" className="selector word_joke_selector" onClick={this.showHelpOverlay}>?</button>
                </nav>

                <div id="content_left">
                    <div id="scatter_plot">
                        <ScatterPlot data={this.getScatterData()} />
                    </div>
                </div>

                <div id="content_right">
                    <BarChart data={null} />
                </div>

                <div id="joke_content">
                    {/*<JokeList filter={this.state.filter} data={this.state.data} /> */}
                </div>
                <div id="help_overlay">
                    <button id="help_close" className="selector word_joke_selector" onChange={this.closeHelpOverlay}>X</button>
                </div>
            </div>
        );
    }
}