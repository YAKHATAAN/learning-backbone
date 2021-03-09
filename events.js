
//Here creating an object 'myVal' and extending with Backbone.Events method
var myVal = _.extend({ name: 'hello' }, Backbone.Events);

var myFunc = function () {
    document.write('First ');


};
var myFunc1 = function () {
    document.write('Second');

};

// The on() method will bind the callback function to objects 
// 'myFunc' and 'myFunc1'
myVal.on('log', myFunc);
myVal.on('log', myFunc1);
document.write('Before using off event, values will be: ');

// trigger() method callbacks for the given event and display the text 
// defined in the 'myFunc' and 'myFunc1' functions
myVal.trigger('log');

//The off() method removes the callback for 'myFunc' and logs only 
// text of 'myFunc1'
myVal.off('log', myFunc);

document.write("<br>");
document.write('After using off event, values will be: ');
myVal.trigger('log');


//The once() method causes the bound callback to only fire once before being removed
myVal.once('hello', function () {
    document.write("<br>");

    document.write("The value after firing once is: ");
    document.write(this.name);//name will get displayed by referring the current object
});

//It triggers the 'hello' event on object 'myVal'
myVal.trigger('hello');
myVal.trigger('hello');
myVal.trigger('hello'); // triggers only once because we used 'once' 

// Create an object 'myVal' and 'myVal2' and extend them using Backbone.Events method
var myVal = _.extend({ name: 'myVal Object' }, Backbone.Events);
var myVal2 = _.extend({ name: 'myVal2 Object ' }, Backbone.Events);

// create the 'listenMe' callback function and invoke when one object 
// listens to particular event on another object
var listenMe = function () {
    document.write("<br>");
    document.write("event triggered on myVal ... ");
    document.write('we are listeningTo myVal using : ' + this.name);
};

// doesnt bind properly TODO
myVal.on('listenMe', firstObjTriggered)

var firstObjTriggered = function () {
    document.write('first object triggers LISTENME ')
}


// The object 'myVal2' listens once for the 'listenMe' event triggered on object 'myVal'
myVal2.listenTo(myVal, 'listenMe', listenMe);

// The 'myVal' has no listenMe event and displays the value of 'myVal2'
myVal.trigger('listenMe');



// The 'myVal2' stops listening to specific event on 'myVal' and displays nothing
myVal2.stopListening(myVal, 'listenMe');
myVal.trigger('listenMe');
