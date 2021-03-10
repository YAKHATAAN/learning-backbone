
var Game = Backbone.Model.extend({

    urlRoot: 'gaming',

    defaults: {
        name: '',
        year: ''
    }
})

var ac = new Game({ name: 'Acreeed', year: 2000 });
var nfs = new Game({ name: 'needForSpeed', year: 2005 });
var gta = new Game({ name: 'grand theft', year: 2016 });

var GameCollection = Backbone.Collection.extend({
    model: Game
})

var collec = new GameCollection();

collec.add([ac, nfs, gta])

collec.each(data => document.write('<br>' + data.get('year')))