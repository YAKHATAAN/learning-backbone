//'Player' is a model and contains defualt value for the model
var Player = Backbone.Model.extend({
    defaults: {
        name: "sachin"
    }
});

//The 'PlayersCollection' is a collection instance and model 'Player' is specified by overriding 
//the 'model' property
var PlayersCollection = Backbone.Collection.extend({
    model: Player
});

var mycollection = new PlayersCollection();

//The set() method sets the values for the 'name' attribute
mycollection.set([
    { name: 'sehwag' },
    { name: 'raina' },
    { name: 'dhoni' }
]);

//The JSON.stringify() method returns values of the collection in the JSON format
document.write("The collection values are:", JSON.stringify(mycollection));
