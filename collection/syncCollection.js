
//The sync() method represents state of a model
Backbone.sync = function (method, model) {

    //The 'method' gives 'read' state of the model by representing data in JSON format
    document.write("The fetched details are: ", method + ": " + JSON.stringify(model));
};

//The collection instance 'details' contains the values which are to be fetched in the collection
var details = new Backbone.Collection({
    Name: "Sachin Tendulkar",
    Country: "India"
});

//This will display the model state by delegating the 'sync()' method
details.fetch();