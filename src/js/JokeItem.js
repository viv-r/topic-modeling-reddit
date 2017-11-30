import React from 'react';

export default class JokeItem extends React.PureComponent {
    render() {
        const joke = this.props.joke;

        if (!joke) return null;

        return (
            <div className="joke">
                <style jsx>{`
                    .joke {
                        display: flex;
                        padding: 5px;
                        margin: 5px;
                        border: 1px solid black;
                        background-color: #fafafa
                    }
                    .col {
                        display: flex;
                        flex-direction: column;
                    }
                    .left {
                        align-items: center;
                        flex: 1;
                    }
                    .right {
                        flex: 9;
                    }
                    .score {
                        flex: 9;
                    }
                    .id {
                        flex: 1
                        font-weight: 100;
                        font-size: 11px;
                    }
                    .title {
                        font-size: 14px;
                        font-weight: 800;
                    }
                    .label {
                        font-size: 8px;
                        color: gray;
                    }
                `}</style>
                <div className="left col">
                    <div className="score">
                        {joke.score}
                    </div>
                    <div className="id">
                        <span className="label">ID: </span>
                        {joke.id}
                    </div>
                </div>
                <div className="right col">
                    <div className="title">{joke.title}</div>
                    <div className="body">{joke.body}</div>
                </div>
            </div >
        );
    }
}