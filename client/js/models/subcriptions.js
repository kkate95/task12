import {Model} from 'backbone';

export default Model.extend({
    urlRoot: '/api/subscriptions',
    defaults: {
        name: ''
    }
});
