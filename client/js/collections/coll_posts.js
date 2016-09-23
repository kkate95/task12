import {Collection} from 'backbone';
import Post from '../models/posts';

export default Collection.extend({
    model :  Post,
    url: function() {
        return '/api/posts';
    }
});
