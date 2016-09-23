import {Model} from 'backbone';

export default Model.extend({
    urlRoot: '/api/users',
    defaults: {
        name: 'User',
        password: ''
    }
});
