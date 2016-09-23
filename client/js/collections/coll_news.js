import {Collection} from 'backbone';
import News from '../models/news';

export default Collection.extend({
    model :  News,
    url: function() {
        return '/api/news?filter[limit]=8';
    }
});
