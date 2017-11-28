import React from 'react'
import data from '../data/reddit_jokes.json'
import JokeList from '../js/JokeList'
import DensityPlot from '../js/DensityPlot'
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
<<<<<<< HEAD
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
=======
                <style jsx>{`
                    body {
                            font-family: 'Montserrat', sans-serif;    
                        }

                        #interactions {
                            background-color: rgba(241, 238, 238, 0.472);
                        }

                        .selector{
                            font-family: 'Montserrat';
                            height: 50px;
                            font-size: 20px;
                            background-color: transparent;
                            width: 120px;
                            border: 1px solid #3a3939;
                            box-shadow: 2px 2px 1px #3a3939;
                            margin-right: 2px;
                            border-radius: 2px;
                            text-align-last: center;
                            transition: all .1s;
                            -webkit-transition: all .2s;
                        }

                        .word_joke_selector:hover,
                        .word_joke_selector:active,
                        .word_joke_selector:focus {
                            box-shadow: 0px 0px 0px #3a3939;
                            background-color: #007EFF;
                            border-radius: 2px;
                            border-width: 4px;
                            font-weight: bold;
                            color: white;
                        }
                        .word_joke_selector:hover {
                            background-color: #FF8B00;
                        }

                        .topic_selector {
                            padding-left: 15px;
                        }


                        .active {
                            box-shadow: 0px 0px 0px #3a3939;
                            background-color: #007EFF;
                            border-radius: 2px;
                            border-width: 4px;
                            font-weight: bold;
                            color: white;
                        }

                        #help_button {
                            position: relative;
                            float: right;
                            width: 50px;
                            background-color: #007EFF;
                            font-weight: bold;
                            color: white;
                        }

                        nav {
                            text-align: center;
                            padding: 5px 10px 10px 10px;
                            min-width: 850px;
                        }

                        nav .selector {
                            margin: 0px 20px;
                        }

                        #content_left {
                            display: inline-block;
                            width: 60%;
                        }

                        #content_right {
                            display: inline-block;
                            position: relative;
                            width:39.5%;
                            left: 3px;
                            text-align: center;
                        }

                        #scatter_plot {
                            min-width: 700px;
                        }

                        #joke_content {
                            text-align: center;
                            margin-top: -20px;
                        }

                        #joke_content table {
                            text-align: left;
                        }

                        .text_input {
                            font-family: 'Montserrat' sans-serif;
                            font-size: 20px;
                            height: 35px;
                            border-radius: 2px;
                            margin: 0px 10px 10px 0px;
                            background-color: transparent;
                            padding-left: 10px;
                            width: 90%;
                            text-align: center;
                        }

                        .text_input:active,
                        .text_input:focus {
                            background-color: #007EFF;
                            color: white;
                        }

                        .img {
                            width: 90%;
                            margin: 20px;
                        }

                        .small {
                            height: 200px;
                        }
                    `}
                </style>
            <Head>
                <title>Topic Modeling the Reddit Jokeset</title>
                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
                <script src="http://d3js.org/d3.v3.min.js"></script>
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
                
                <div class="content_left">
                    <ScatterPlot data={data} />
                </div>

                <div class="content_left">
                    <DensityPlot data={data} />
                </div>

                <Filter filter={this.state.filter} onChange={this.onFilterChange} />
                   {/* <JokeList filter={this.state.filter} data={this.state.data} /> */}
            </div>
>>>>>>> 2133d556041c00761b832807b11215ab69a62b3b
            </div>
        );
    }
}