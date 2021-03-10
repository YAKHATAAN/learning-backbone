
// without sync the request is rejected for security issues? because its not a http request

Backbone.sync = (method, model) => {
    document.write('<br>' + method + ": " + JSON.stringify(model))
}

var Game = Backbone.Model.extend({

    urlRoot: 'gaming',

    defaults: {
        name: '',
        year: ''
    }
})

var ac = new Game();

var gameData = { id: 1, name: 'ACreed', year: 2019 }

ac.save(gameData, {
    success: function (ac) {
        alert(JSON.stringify(ac));
    }
})

ac.fetch()

// from documentation 

Backbone.sync = function (method, model) {
    document.write('<br>' + method + ": " + JSON.stringify(model));
    model.set('id', 1);
};

var book = new Backbone.Model({
    title: "The Rough Riders",
    author: "Theodore Roosevelt"
});

book.save();

book.save({ author: "Teddy" });