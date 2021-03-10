//'Players' is a model name and containa default values
var Players = Backbone.Model.extend({
    defaults: {
        id: "",
        name: "",
        country: ""
    }
});

//The 'PlayersCollection' is an instance of the collection
var PlayersCollection = Backbone.Collection.extend({

    //The model 'Players' is specified by overriding the "model" property of the collection
    model: Players
});
$(function () {
    var mycollection = new PlayersCollection();

    // The set() method to sets the values for 'id', 'name' and 'country' attributes, specified 
    //in the model "Players"
    mycollection.set([
        { id: 1, name: 'dhoni', country: 'india' },
        { id: 2, name: 'gayle', country: 'west indies' },
        { id: 3, name: 'maxwell', country: 'australia' },
        { id: 4, name: 'duminy', country: 'south africa' }
    ]);

    // The findWhere() method finds the model containing with the id '1'
    var res = mycollection.findWhere({ name: "dhoni" }); // ANY ATTRIBUTE can be searched! 

    //Display the result in  the JSON format
    document.write("The values of matched attribute are: ", JSON.stringify(res));
});