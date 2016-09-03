import comments from './comments';

let store = {comments: comments};

export function getComments() {
    return store.comments;
}
