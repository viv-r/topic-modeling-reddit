import React from 'react';
import JokeList from './JokeList';
import '../css/lists.css';

export default class TopicLists extends React.PureComponent {
    constructor(props) {
        super(props);
        console.log('creating joke map', this.props.jokes.length, 'jokes')
        const len = this.props.jokes.length;
        this.idMap = {};
        this.topicJokes = {};
        for (let i = 0; i < len; i++) {
            const jk = this.props.jokes[i];
            this.idMap[jk.id] = jk
        }
        // this.idMap = this.props.jokes.reduce((map, jk) => ({
        //     ...map,
        //     [jk.id]: jk
        // }), {});
        console.log('done creating joke map')
        this.checkCache(props);
    }

    // R screws up lists with one element.
    fix(list) {
        return list ? (list.map ? list : [list]) : [];
    }

    collectJokesForTopic(topic) {
        console.log('collecting jokes for topic', topic)

        const words = this.props.topics[topic].words;
        const list = []
        const map = {}
        for (let i = 0; i < words.length; i++) {
            const ids = this.fix(words[i].joke_ids);
            for (let j = 0; j < ids.length; j++) {
                if (!map[ids[j]]) {
                    map[ids[j]] = true;
                    list.push(this.idMap[ids[j]]);
                }
            }
        }
        this.topicJokes[topic] = list.slice(0, 500);
        console.log('done collecting jokes for topic', topic)
        console.log('got', list.length, 'jokes')
    }

    componentWillReceiveProps(nextProps) {
        this.checkCache(nextProps);
    }

    checkCache(nextProps) {
        if (!this.topicJokes[nextProps.topicA]) this.collectJokesForTopic(nextProps.topicA);
        if (!this.topicJokes[nextProps.topicB]) this.collectJokesForTopic(nextProps.topicB);
    }


    render() {
        const topicA = {
            border: '2px solid ' + this.props.topicA_color
        }
        const topicB = {
            border: '2px solid ' + this.props.topicB_color
        }
        return (
            <div>
                <div className='lists_title'>
                    <span style={topicA}>Jokes in Topic {this.props.topicA}</span>
                    <span style={topicB}>Jokes in Topic {this.props.topicB}</span>
                </div>
                <div className='lists_body'>
                    <div className='list_container'>
                        <JokeList
                            color={this.props.topicA_color}
                            data={this.topicJokes[this.props.topicA]}
                        />
                    </div>
                    <div className='list_container'>
                        <JokeList
                            color={this.props.topicB_color}
                            data={this.topicJokes[this.props.topicB]}
                        />
                    </div>
                </div>
            </div>
        )
    }
}