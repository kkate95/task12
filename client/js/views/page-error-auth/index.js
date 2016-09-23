import {View} from 'backbone';
import tmpl from './page-error.ejs';

export default View.extend({
    events: {
    },

    template: tmpl,
    initialize: function(){
        const that = this;
        that.$el.html(that.template()).
            fadeIn(200);
        setTimeout(function(){
            that.$el.find('.auth_error').
                hide();
            that.$el.find('.auth_offer').
                fadeIn(200);
        }, 1800);
    }
});
