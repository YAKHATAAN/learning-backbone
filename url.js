var MyModel = Backbone.Model.extend({
    urlRoot: 'user/project'
});
var mymodel = new MyModel({
    id: "models"
});
// document.write(mymodel.url());