var Person = Backbone.Model.extend({
    defaults: {
        name: 'Prosper Otemuyiwa',
        age: 23,
        occupation: 'Teacher'
    }
});

var p = new Person();

var PersonView = Backbone.View.extend({
    tagName: 'li',

    my_template: _.template("<strong><%= name %></strong>"),

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(this.my_template(JSON.stringify(p)));
    }
});

var vi = new PersonView()

// var Person = Backbone.Model.extend({
//     defaults: {
//         'name': 'Prosper Otemuyiwa',
//         'age': 23,
//         'occupation': 'SDE'
//     }
// });

// var p1 = new Person()
// var p2 = new Person({
//     'name': 'John',
//     'age': 20,
//     'occupation': 'Student'
// })
// var p3 = new Person({
//     'name': 'Barron',
//     'age': 43,
//     'occupation': 'Minister'
// })

// var PersonView = Backbone.View.extend({
//     el: '#li',

//     my_template: _.template("<strong><%= name %></strong>"),

//     initialize: function (p) {
//         this.render(p);
//     },

//     render: function (p) {
//         console.log(JSON.stringify(p))
//         this.$el.html(this.my_template(JSON.stringify(p))); // not working TODO
//     }
// });

// var pv = new PersonView(p2);