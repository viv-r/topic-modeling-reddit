import React from 'react'
// import data from './data/reddit_jokes.json'
// import JokeList from './js/JokeList'
import BarChart from './js/BarChart'
import ScatterPlot from './js/ScatterPlot'
import TopicSelector from './js/TopicSelector'
import { Button, Dialog } from '@blueprintjs/core'
import SketchPicker from 'react-color'
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
            topicA_color: '#FF005A',        // color of 1st topic
            topicB_color: '#02FF00',       // color of 2nd topic
            words_to_show: 100,         // number of words to show in the bar chart
            enableDistortion: false,    // toggle cartesian distortion
            helpIsOpen: false,          // help dialog
            displayColorPicker: false,  // color picker
            color_to_change: -1
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

    toggleHelpOverlay = () => {
        this.setState({
            helpIsOpen: !this.state.helpIsOpen
        })
    }

    toggleDistortion = () => {
        this.setState({
            enableDistortion: !this.state.enableDistortion
        })
    }    

    toggleColorPicker = (t) => {
        this.setState({ 
            color_to_change: t,
            displayColorPicker: !this.state.displayColorPicker
        });  
    }

    handleColorChange = (color) => {
        if (this.state.color_to_change === 1) {
            this.setState({ 
                topicA_color: color.hex,
            })
        }
        else {
            this.setState({
                topicB_color: color.hex,
            })
        }
    }

    render() {
        return (
            <div>
                <nav id="interactions">
                    <Button text={'D'} 
                        onClick={this.toggleDistortion} 
                        className={"small float_left"} />

                    <TopicSelector
                        position={1}                        
                        value={this.state.topicA} 
                        onChange={this.setTopicA} />

                    <Button
                        className={"selector color_selector float_left"}
                        onClick={this.toggleColorPicker.bind(this, 1)}
                        style={{background: this.state.topicA_color }} />  
                          
                   <img id="logo" src={ require("./css/reddit_logo.png" )} alt="reddit logo" />                   

                    <Button text="?" 
                        onClick={this.toggleHelpOverlay} 
                        className={"small float_right"} />

                    <TopicSelector
                        position={2}
                        value={this.state.topicB} 
                        onChange={this.setTopicB} />                    
                    
                    <Button
                        className={"selector color_selector float_right"}
                        onClick={this.toggleColorPicker.bind(this, 2)}
                        style={{background: this.state.topicB_color }} />                   
                </nav>

                 {/* help dialog */}
                 <Dialog
                    isOpen={this.state.helpIsOpen}
                    onClose={this.toggleHelpOverlay}
                    hasBackdrop={true}
                    title={"Help"} >
                    <div className="help_content">
                        <h6>What are we looking at?</h6>
                        <p>This web app visualizes the results of performing LDA topic modeling analysis with the Reddit joke dataset - 200K jokes!</p>
                        
                        <h6>Switching Topics</h6>
                        <p>Topics can be changed with the dropdowns in the upper left and right of the navbar. Their associated <strong>colors</strong> can also be changed by clicking on the color squares next to the dropdowns!</p>

                        <h6>Scatter Plot</h6>
                        <p>Each dot on the scatter plot represents a word. The dot's position along the horizontal and vertical axises describe the probablity that the associated word belongs to the first or second selected topics respectively. The hue of the dot helps distinguish associated topics as well indicating how probable the associated word belongs to a particular topic. The stronger the hue is towards a topic's main color the more probable they're associated!</p>
                        <p><strong>cartesian distortion</strong> can be applied to the scatter plot to help compare word positions. You can enable or disable it by clicking the 'D' in the far left of the nav bar!</p>
                        
                        <h6>Bar Plots</h6>
                        <p>Most text modeling algorithms tend to destroy the semantic context associated with their results. Unfortunately, LDA modeling is one of them. As such, we're only able to discover a predetermined number of topics but not give a topic name to bring context to the associated words. Our model performed the best when tuned to 50 topics. The bar plots are used to give you back some more of that semantic context. It's quite fun to flip through the topics and see what they're about!</p>      

                        <h6>Area (Density) Plot</h6>
                        <p>The area chart shows how likely a joke written about a particular topic is going to recieve more views. If the area is all crammed up towards the left (also called right skewed ~ weirdo statitians) don't write a joke in that topic because it's unlikely to score well!</p>
                    </div>
                </Dialog>

                {/* color picker */}
                <Dialog 
                    isOpen={this.state.displayColorPicker}
                    onClose={this.toggleColorPicker} 
                    className={"color_container"} >
                    <SketchPicker
                        onChangeComplete={ this.handleColorChange }
                        color = { 
                            this.state.color_to_change === 1 ? 
                            this.state.topicA_color : 
                            this.state.topicB_color}
                        className={ "colorSelector" } />
                </Dialog>

                <section id="scatter_plot">
                    <ScatterPlot {...this.state} />
                </section>

                <div className="bar_charts">
                    <BarChart {...this.state} topic={1} />
                </div>
                <div className="bar_charts">
                    <BarChart {...this.state} topic={2} />
                </div>

                <div id="joke_content">
                    {/*<JokeList filter={this.state.filter} data={this.state.data} /> */}
                </div>

                <div id="tooltip">
                    <div id="color_indicator" />
                </div>
            </div>
        );
    }
}