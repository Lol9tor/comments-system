import React, { Component, PropTypes } from 'react';

export default class CommentForm extends Component {
    static propTypes = {
        addComment: PropTypes.func.isRequired
    };

    constructor() {
        super();

        this.state = {
            author: '',
            message: ''
        }
    }

    handleChange = (key) => (e) => {
        this.setState({
            [key]: e.currentTarget.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {author, message} = this.state;
        if(author && message) {
            const timestamp = Date.now();
            this.props.addComment({author, message, timestamp});
            this.resetForm();
        }
    };

    resetForm = () => {
        this.setState({
            author: '',
            message: ''
        });
    };

    render() {
        return <div className="row">
            <form action="" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    onChange={this.handleChange('author')}
                    value={this.state.author}
                    className="form-group form-control"
                    placeholder="Name"
                />
                <textarea
                    onChange={this.handleChange('message')}
                    value={this.state.message}
                    className="form-group form-control"
                    rows="3"
                    placeholder="Type your message..."
                />
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>;
    }
}