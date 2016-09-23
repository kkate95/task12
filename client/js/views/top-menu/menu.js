import $ from 'jquery';
//import Backbone from 'backbone';
import Reg_auth_view from '../reg_auth/view_reg_auth';
import tmpl from './menu.ejs';

export default Backbone.View.extend({
    events: {
        'click .sign_in': 'showForm',
        'click .sign_out': 'exit',
        'click #touch_menu': 'toggleMenu',
        'click .page_news': 'showNews',
        'click .page_user': 'showUserPage',
        'click .search': 'showSearchForm',
        'click .page_subscription': 'showSubscription'
    },

    initialize: function() {
        this.$el.html(tmpl());
        if (sessionStorage.getItem('activeUser')){
            this.$el.find('#sign_in').hide();
            this.$el.find('#sign_out').show();
        }
        const menu = this.$el.find('.nav');

        $(window).resize(() => {
            const wid = $(window).width();
            if (wid > 760 && menu.is(':hidden') ){
                menu.removeAttr('style');
            }
        });
    },

    exit: function(e){
        e.preventDefault();
        this.$el.find('#sign_out').hide();
        this.$el.find('#sign_in').show();
        sessionStorage.removeItem('activeUser');
    },
    showForm: function(e) {
        e.preventDefault();
        new Reg_auth_view({el: '.container'});
    },

    showNews: function(e){
        e.preventDefault();
        Backbone.history.navigate('news', {trigger: true});
    },

    toggleMenu: function(e) {
        e.preventDefault();
        this.$el.find('.nav').
            slideToggle();
    },

    showUserPage: function(e){
        e.preventDefault();
        Backbone.history.navigate('myPage', {trigger: true});
    },

    showSearchForm: function(e){
        e.preventDefault();
        this.$el.find('.search-form').
            fadeToggle(200);
    },

    showSubscription: function(e){
        e.preventDefault();
        Backbone.history.navigate('subscriptions', {trigger: true});
    }
});
