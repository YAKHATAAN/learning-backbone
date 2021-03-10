//'Player' is a model name
Player = Backbone.Model.extend({
    name: ""
});

//The 'PlayersCollection' is an instance of the collection
PlayersCollection = Backbone.Collection.extend({
    model: Player  //The model 'Player' is specified by overriding the "model" property of the collection
});
var player1 = new Player({ name: "Dravid" });
var player2 = new Player({ name: "Raina" });
var player3 = new Player({ name: "Jadeja" });
var player4 = new Player({ name: "Raina" });
var mycollection = new PlayersCollection();

//The 'player1','player2' and 'player3' are 3 instances added to the collection by using 'mycollection' instance
mycollection.add(player1);
mycollection.add(player2);
mycollection.add(player3);
mycollection.add(player4);

//The where() method returns the model, which contains the name with "Raina" in the collection
var myteam = mycollection.where({ name: 'Raina' });
// what data type is this? if model, then why does not JSON.stringify(myteam) work?

document.write("Total numbers of items that matches given attribute are:",
    + myteam.length);

