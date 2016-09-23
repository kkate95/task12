import {View} from 'backbone';
import tmpl from './item.ejs';

export default View.extend({
    tagName: 'div',

    className: 'posts',

    events: {

    },

    initialize: function(){
        this.template = tmpl;

        this.listenTo(this.model, 'change', this.render);
    },

    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
    }
});
