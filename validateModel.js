var Person = Backbone.Model.extend({
    defaults: {
        name: 'john',
        age: 25,
        occupation: 'working'
    },
    initialize: function () {
        this.on("invalid", function (model, error) {
            document.write(error);
        });
    },
    validate: function (attributes) {
        if (attributes.age < 25) {
            return 'please enter the correct age!!! ';
        }
        if (!attributes.name) {
            return 'please enter the name!!!';
        }
    },
});
var person = new Person();

person.on('invalid', function () {
    this.arguments; // is this needed??
});
person.set({ age: '20' }, { validate: true });
