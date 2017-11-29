import React from 'react';

export default class TopicSelector extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            value: ""
         };
      }
    
     changeHandler(e) {
        this.setState({
             value: e.value
         });         
     }

     render() {
        return(
               <select 
                    id={this.props.id} 
                    onChange={this.changeHandler.bind(this)} 
                    value={this.state.value} 
                    className="selector topic_selector">

                  <option value="1">Topic 1</option>
                  <option value="2">Topic 2</option>
                  <option value="3">Topic 3</option>
               </select>
        );
     }
}