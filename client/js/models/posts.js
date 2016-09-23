import {Model} from 'backbone';

export default Model.extend({
    urlRoot: '/api/posts',
    defaults: {
        name: '',
        likes_count: ''

    }
});
