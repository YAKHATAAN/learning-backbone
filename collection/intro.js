var Person = Backbone.Model.extend({
    defaults: {
        name: 'Sachin',
        age: '20'
    }
})

var People = Backbone.Collection.extend({
    model: Person
})



var p1 = new Person({ name: 'Navfal', age: 20 })
var p2 = new Person({ name: 'Faiz', age: 21 })

var peopleInstance = new People([p1, p2]);

document.write(JSON.stringify(peopleInstance))