var Student = Backbone.Model.extend({
    defaults: {
        name: null,
        age: 'NILL'
    },
    validate: function () {
        if (!this.name) {
            console.log('Provide a name')
        }
    },
    initialize: function () {
        this.render();

    },
    render: function () {
        document.write('<br> Welcome to Stident Portal <br>')
    }
})

var me = new Student();

me.on('error', () => {
    console.log('error thrown detected')
})

me.set({ name: 'navfal', age: 20 }, { validate: true })