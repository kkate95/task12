import {View} from 'backbone';
import tmpl from './item.ejs';

export default View.extend({
    tagName: 'div',

    className: 'news_item',

    events: {
        'click .heart': 'likePost',
        'click .share': 'share'
    },

    initialize: function(){
        this.template = tmpl;

        this.listenTo(this.model, 'change', this.render);
    },

    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
    },

    likePost: function(){
        //this.$el.find('.heart').css('color', '#e81913');
        //alert('hoho');

        //this.coll.set

        //this.model.set('likes_count', this.model.get('likes_count') + 1);
        this.model.idAttribute = 'name';
        this.model.save({likes_count : this.model.get('likes_count') + 1});
    },

    share: function(){
        //alert('hoho');
    }
});
