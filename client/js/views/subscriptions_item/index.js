import {View} from 'backbone';
import tmpl from './item.ejs';

export default View.extend({
    tagName: 'div',

    className: 'subscr',

    events: {
        'click .watch' : 'watch_navigation'
    },

    initialize: function(){
        this.template = tmpl;

        this.listenTo(this.model, 'change', this.render);
    },

    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
    },

    watch_navigation : function(){
        //Backbone.history.navigate('subscriptions/' + )

    }
});

