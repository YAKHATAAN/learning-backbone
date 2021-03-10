var Person = Backbone.Model.extend();

let guy = new Person();

guy.set({
    'name': 'Navfal',
    'age': 20
})

document.write('<br><br>')
document.write('The person object guy has name ' + guy.get('name'))


var Photo = Backbone.Model.extend({
    defaults: {
        name: 'placeholder.jpg',
        tags: [],
        date: '12 Feb',
        year: '2021',
    },
    initialize: function () {
        this.on("change:name", function () {
            var name = this.get("name");
            console.log('Image source updated to ' + name);
        });
    },
    changeName: function (source) {
        this.set({ name: source });
    }
});

var myPhoto = new Photo({
    name: "boston",
    tags: ['the big game', 'vacation']
})

myPhoto.changeName('delhi')

let iname = myPhoto.get("name")
let itime = myPhoto.get("date") + ' ' + myPhoto.get("year")

console.log(iname)
console.log(itime)

// get all attributes as js object? 

var allAtr = myPhoto.attributes

console.log(allAtr)
