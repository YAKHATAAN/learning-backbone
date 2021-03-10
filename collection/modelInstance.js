
//The model 'ModelDemo' uses the sync method to display the model state such as create, read, update etc
var ModelDemo = Backbone.Model.extend({
    validate: function () {
        console.log('validating')
    },
    sync: function (method, model, options) {
        document.write('<br>' + JSON.stringify(arguments));
    }
});

//'CollectionDemo' is an instance of the collection
var CollectionDemo = Backbone.Collection.extend({
    model: ModelDemo   //The model 'ModelDemo' is specified by overriding the 'model' property
});

//'ViewDemo' is the name of the view
var ViewDemo = Backbone.View.extend({

    //The instance of the collection 'collectiondemo' is created within the 'initialize()' function
    initialize: function () {
        var collectiondemo = new CollectionDemo();

        collectiondemo.create({
            Name: "Sachin Tendulkar",
            Country: "India"
        });
    }
});
new ViewDemo();  //The view instance 'ViewDemo' is created using the 'new' keyword.
