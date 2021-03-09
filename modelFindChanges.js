var List = new Backbone.Model({
    name1: 'sachin',
    name2: 'dhoni',
    name3: 'sehwag'
});

var values = List

values.on('change', function () {
    document.write("The changed attributes are: ");
    document.write(JSON.stringify(values.changedAttributes()));
});

values.set({
    name1: 'yuvraj',
    name2: 'raina'
});