import React, {Component, PropTypes} from 'react';

import CommentForm from './components/commentForm';
import Comments from './components/comments';

import {getComments} from './store/store';

class Root extends Component {
    static propTypes = {

    };

    constructor() {
        super();

        this.state = {
            comments: getComments() || []
        }
    }

    addComment = (comment) => {
        this.setState({
            comments: this.state.comments.concat(comment)
        });
    };

    render() {
        return <div className="container">
            <CommentForm addComment={this.addComment}/>
            <Comments comments={this.state.comments}/>
        </div>
    }
}

export default Root