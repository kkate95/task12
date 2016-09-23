import {Collection} from 'backbone';
import Reg from '../models/users';

export default Collection.extend({
    model : Reg,
    url: function() {
        return '/api/users';
    }
});
