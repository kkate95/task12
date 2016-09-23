import {Router} from 'backbone';

export default Router.extend({

    routes: {
        '*path' : 'redirectSections'
    },
    redirectSections : function(){
        this.navigate('news', {trigger: true});
    }

});
