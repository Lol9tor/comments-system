import React, { Component, PropTypes } from 'react';

import Comment from './comment';

export default class Comments extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired
    };

    render() {
        const {comments} = this.props;
        return <div className="row">
            <h3>Comments</h3>
            <ul className="list-group">
                {comments.map((comment, i)=><Comment comment={comment} key={i}/>)}
            </ul>
        </div>;
    }
}