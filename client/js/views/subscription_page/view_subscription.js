import {View} from 'backbone';
import tmpl from './subscription.ejs';
import SubscriptionCollection from '../../collections/coll_subscription';
import SubscriptionItem from '../subscriptions_item/index';
import $ from 'jquery';

export default View.extend({
    events: {

    },

    template: tmpl,
    initialize: function(){
        this.$el.html('');
        this.$el.html(this.template());
        this.coll = new SubscriptionCollection();

        this.listenTo(this.coll, 'sync', this.render);

        this.listenTo(this.coll, 'create', this.render);
        this.coll.fetch();
    },

    render: function (){

        const that = this;
        const all_news = that.$el.find('.subscript');
        all_news.html('');

        _.each(that.coll.models, function (model) {
            const modelView = new SubscriptionItem({model: model});
            modelView.render();
            all_news.append(modelView.$el);
        }, that);

        that.$el.fadeIn(200);
    }
});
