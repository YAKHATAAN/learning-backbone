Backbone.sync = function (method, model) {
    document.write('<br>' + method + ": " + JSON.stringify(model));
};
var person = new Backbone.Model({
    Country: "India",
    Name: "Sachin Tendulkar"
});

// CRUD OPERATION  

person.save(); // create    
person.fetch(); // read 
person.save({ Name: 'Navfal', id: 1 }); // update
person.destroy(); // delete - logs only if 'id' present... 

// removes the model from the server by using the Backbone.sync method which delegates the HTTP "delete" request.