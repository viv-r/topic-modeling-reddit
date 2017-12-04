import React from 'react';

export default f => class Svg extends React.PureComponent {
    componentWillUpdate(nextProps) {
        if (!f) {
            console.warn("unused svg component");
            return;
        }
        f(this.node, nextProps);
    }

    componentDidMount() {
        if (!f) {
            console.warn("unused svg component");
            return;
        }
        f(this.node, this.props);
    }

    setRef = ref => this.node = ref;

    render() {
        return <svg ref={this.setRef} />;
    }
}