import {Collection} from 'backbone';
import Subscriptions from '../models/subcriptions';

export default Collection.extend({
    model :  Subscriptions,
    url: function() {
        return '/api/subscriptions';
    }
});
