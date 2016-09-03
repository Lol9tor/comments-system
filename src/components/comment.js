import React, { Component, PropTypes } from 'react';

export default class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired
    };

    render() {
        const {author, message, timestamp} = this.props.comment;
        const time = (new Date(timestamp)).toLocaleDateString() +' '+ (new Date(timestamp)).toLocaleTimeString();
        return <li className="list-group-item">
            <h5>
                <b>{author}</b>
                <span className="date-box"><i>{time}</i></span>
            </h5>
            <div>{message}</div>
        </li>;
    }
}