import UserCollection from '../../collections/coll_users';
import {View} from 'backbone';
import tmpl from './reg_auth_form.ejs';
import $ from 'jquery';

export default View.extend({

    events:{
        'submit #auth_form' : 'auth_user',
        'submit #reg_form' : 'add_user',
        'click #overlay' : 'closeForm',
        'click .close' : 'closeReg',
        'click .toggle' : 'toggleMenu'
    },
    template: tmpl,

    initialize: function(){
        this.$el.html(this.template()).
            fadeIn(200).
            find('#overlay').
            fadeIn(100);
        this.coll = new UserCollection();
        //this.listenTo(this.coll, 'sync', this.render);
        //this.listenTo(this.coll, 'create', this.render);
    },

    auth_user: function(e){
        e.preventDefault();
        const name = this.$el.find('#Username').val().trim();
        const pass = this.$el.find('#Password').val().trim();
        const wr_ans = this.$el.find('.wrong_answer_auth');

        const that = this;
        that.coll.fetch({
            success: function(){
                if (that.coll.where({name: name}).length === 0){
                    wr_ans.html('Нет зарегистрированного пользователя с таким именем');
                } else {
                    if (that.coll.where({password: pass}).length === 0){
                        wr_ans.html('Пароль введён неверно');
                    } else {
                        that.$el.find('#Username, #Password').val('');
                        that.$el.find('#overlay').click();
                        sessionStorage.removeItem('activeUser');
                        sessionStorage.setItem('activeUser', name);
                        $('#sign_in').hide();
                        $('#sign_out').show();
                    }

                }
            }
        });
    },

    add_user: function(e){
        e.preventDefault();
        const name = this.$el.find('#Username-new').val().trim();
        const pass = this.$el.find('#Password-new').val().trim();
        const rpass = this.$el.find('#Repeat_Password').val().trim();
        const wr_ans = this.$el.find('.wrong_answer_reg');

        if (pass !== rpass) {
            wr_ans.html('Пароли не совпадают!');
            return;
        }

        const that = this;
        that.coll.fetch({
            success: function(data){

                if (data.where({name: name, password: pass}).length !== 0){
                    wr_ans.html('Пользователь с таким именем уже существует!');
                } else {
                    wr_ans.html('');
                    that.coll.create({
                        name: name,
                        password: pass
                    });
                    that.$el.find('#overlay').click();
                    that.$el.find('#Username-new, #Password-new, #Repeat_Password').val('');
                    sessionStorage.removeItem('activeUser');
                    sessionStorage.setItem('activeUser', name);
                    $('#sign_in').hide();
                    $('#sign_out').show();
                }
            }
        });
    },

    closeForm: function(){
        this.$el.fadeOut(200);
        this.$el.find('#overlay').fadeOut(200);
    },

    closeReg: function(){
        this.$el.stop().removeClass('active');
    },

    toggleMenu: function(){
        this.$el.stop().addClass('active');
    }
});
