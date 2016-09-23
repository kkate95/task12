import NewsCollection from '../../collections/coll_news';
import NewsItem from '../news_item/index';
import {View} from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import tmpl from './news_list.ejs';
export default View.extend({

    events: {
        'click .arrow': 'arrow'
    },

    template: tmpl,

    initialize: function(){
        this.$el.html('');
        this.$el.html(this.template());
        this.coll = new NewsCollection();

        this.listenTo(this.coll, 'sync', this.render);

        this.listenTo(this.coll, 'create', this.render);
        this.coll.fetch();
    },

    render: function () {
        const that = this;
        const all_news = that.$el.find('.all_news');
        all_news.html('');

        _.each(that.coll.models, function (model) {
            const modelView = new NewsItem({model: model});
            modelView.render();
            all_news.append(modelView.$el);
        }, that);

        that.$el.fadeIn(200);

        $(window).scroll(() => {
            const st = $(window).scrollTop();
            if (st > 100) {
                that.$el.find('.arrow').fadeIn('normal');
            } else {
                that.$el.find('.arrow').fadeOut('normal');
            }
        });
    },

    arrow: function(){
        $('body,html').animate({"scrollTop" : 0}, "normal");
    }
});
