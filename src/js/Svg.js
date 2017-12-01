import React, { PureComponent } from 'react';

export default f => class Svg extends PureComponent {
    componentWillUpdate() {
        if (!f) {
            console.warn("unused svg component");
            return;
        }
        f(this.node, this.props);
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
        return <svg {...this.props} ref={this.setRef} />;
    }
}