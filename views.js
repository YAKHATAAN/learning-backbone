
var Header = Backbone.View.extend({

   el: '#header',

   initialize: function () {
      this.render();
   },

   render: function () {
      this.$el.html("HEADER Menu 1 | Menu 2 | Menu 3");
   }
});


var head = new Header();

var AppView = Backbone.View.extend({
   // el - stands for element. Every view has an element associated with HTML content, will be rendered. 
   el: '#container',

   // It's the first function called when this view is instantiated.
   initialize: function (toShow) {
      this.render(toShow);
   },

   // $el - it's a cached jQuery object (el), in which you can use jQuery functions to push content.

   //Like the Hello TutorialsPoint in this case.
   render: function (toShow) {
      this.$el.html(`${toShow}`);
   }
});

var appView = new AppView('Hello There!');


