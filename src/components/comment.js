import React, { Component, PropTypes } from 'react';

export default class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired
    };

    render() {
        const {author, message, timestamp} = this.props.comment;
        const time = (new Date(timestamp)).toLocaleDateString() +' '+ (new Date(timestamp)).toLocaleTimeString();
        return <li className="comment-box">
            <div><b>{author}</b> <i>{time}</i></div>
            <div>{message}</div>
        </li>;
    }
}