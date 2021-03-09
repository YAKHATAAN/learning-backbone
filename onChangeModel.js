Player = Backbone.Model.extend({
    defaults: {
        p_name: 'sachin',
        country: 'india'
    },
    initialize: function () {
        this.bind("change:p_name", function (model) {
            document.write('<br>changed playerName')
        });
    }
});
var person = new Player();
document.write("<br><b>Before changing the name attribute, its value is:</b> ",
    person.get("p_name"));

person.set({ p_name: 'dhoni' });
document.write("<br><b>After changing the name attribute, its value is:</b> ",
    person.get("p_name"));