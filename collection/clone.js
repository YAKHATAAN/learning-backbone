
var Person = Backbone.Model.extend();

//The model instance 'person' contains 'name' attribute
var person = new Person({
    name: 'Sachin Tendulkar'
});

var MyCollection = Backbone.Collection.extend({
    model: Person   //model is override by specifying the "model" property of collection class
});
var myCollection = new MyCollection();

// The clone() method uses get method to retrieve the 'name' attribute
var details = myCollection.clone(person.get('name'));

//The variable 'details' assigns the value for 'name' as 'M.S.Dhoni'
details.name = "M.S.Dhoni";
document.write("The person is: ", person.get('name'));
document.write("<br> The new instance of collection is: ", JSON.stringify(details.name));

