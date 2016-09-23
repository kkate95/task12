import {Model} from 'backbone';

export default Model.extend({
    urlRoot: '/api/news',
    defaults: {
        name: 'News',
        description: '',
        likes_count: 0
    }
});
