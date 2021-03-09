
let Video = Backbone.Model.extend({
    defaults: {
        name: 'VIDEO'
    },
    validate: function (attribs) {
        console.log('validating')

        if (!attribs.src) {
            // if source is undefined, it will remind 
            console.log("Remember to set a source for your video!");
        }
    },

    initialize: function () {
        console.log('this model has been initialized');
        this.on("error", function (model, error) {
            console.log('error triggered...')
        });
    }
});

let myVid = new Video({
    name: 'Beach Video'
});
myVid.set({ title: "On the beach" }, { validate: true });

// DOESNT? TODO log Remember to set a source for your vid!
// validate is not called!