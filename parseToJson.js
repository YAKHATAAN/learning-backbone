
var Person = Backbone.Model.extend({
    parse: function (response, options) {
        console.log(JSON.stringify(response));
    }
});

var person = new Person({
    "values": [{
        "fname": "Sachin",
        "lname": "Tendulkar",
        "country": "India"
    }]
}, { parse: true });


document.write(JSON.stringify(person)) // doesnt give json format while parse is true