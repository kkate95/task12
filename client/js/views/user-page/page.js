import {View} from 'backbone';
import tmpl from './page.ejs';
import $ from 'jquery';
import Quill from 'quill';
import PostCollection from '../../collections/coll_posts';
import PostItem from '../user_page_item/index';

export default View.extend({
    events: {},

    template: tmpl,
    initialize: function(){

        //this.$el.html('');
        //this.render();
        this.$el.html(this.template());
        this.coll = new PostCollection();

        this.listenTo(this.coll, 'sync', this.render);
        this.listenTo(this.coll, 'create', this.render);
        this.coll.fetch();
        var options = {
            placeholder: 'Введите ваше сообщение...',
            theme: 'snow'
        };
        var editor = new Quill('.next', options);

    },

    render: function (){

        if (sessionStorage.getItem('activeUser')){

            const that = this;
            const user_posts = that.$el.find('.user_posts');
            user_posts.html('');

            that.$el.html(this.template({User:sessionStorage.getItem('activeUser')})).
            fadeIn(200);
            _.each(that.coll.models, function (model) {
                const modelView = new PostItem({model: model});
                modelView.render();
                user_posts.append(modelView.$el);
            }, that);

            that.$el.fadeIn(200);
        } else {
            Backbone.history.navigate('error_auth', {trigger: true});
        }

    }
});
