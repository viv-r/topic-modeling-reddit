import React from 'react';

export default class Filter extends React.PureComponent {
    onChange = (e) => {
        this.props.onChange(e.target.value)
    }
    render() {
        return (
            <div>
                <style jsx> {`
                    padding: 5px;
                    width: calc(100% - 10px);
                `}</style>
                <input
                    className="search"
                    onChange={this.onChange}
                    placeholder="Enter something to filter"
                    value={this.props.filter}
                    type="text"
                />
            </div>
        );
    }
}