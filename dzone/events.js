var UserModel = Backbone.Model.extend({

    initialize: function () {
        this.on('change', this.someChange);
    },

    defaults: {
        name: '',
        email: ''
    },

    someChange: function (model, options) {
        document.write(JSON.stringify(model))
    }

});

var newUser = new UserModel({ name: 'Raymond Igoladebayi', email: 'raymond@waya.com' });
newUser.set('email', 'ppp@ppp.com');