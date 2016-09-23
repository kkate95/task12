import {Router} from 'backbone';
import News_view from '../views/news_list/view_news';
import UserPage from '../views/user-page/page';
import SubscriptionPage from '../views/subscription_page/view_subscription';
import ErrorAuthPage from '../views/page-error-auth/index';

import $ from 'jquery';

export default Router.extend({
    routes: {
        'news': 'navigate_news',
        'myPage' : 'navigate_myPage',
        'subscriptions' : 'navigate_subscriptions',
        'error_auth': 'navigate_error_auth_page'
    },

    oldView : null,

    $el: $('.content'),

    closeOld: function(){
        this.oldView.remove();
    },

    navigate_news: function(){
        if (this.oldView) this.closeOld();
        $(document.body).append(this.$el);
        this.oldView = new News_view({el : this.$el});
    },

    navigate_myPage: function(){
        if (this.oldView) this.closeOld();
        $(document.body).append(this.$el);
        this.oldView = new UserPage({el : this.$el});
    },

    navigate_subscriptions: function(){
        if (this.oldView) this.closeOld();
        $(document.body).append(this.$el);
        this.oldView = new SubscriptionPage({el : this.$el});
    },

    navigate_error_auth_page : function () {
        if (this.oldView) this.closeOld();
        $(document.body).append(this.$el);
        this.oldView = new ErrorAuthPage({el : this.$el});
    }
});
