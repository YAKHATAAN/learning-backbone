var Person = Backbone.Model.extend();
var person = new Person({
    p_name: 'Sachin Tendulkar',
    country: 'India'
});


document.write('<br>Has name changed (before set) = ' + person.hasChanged());

person.set('p_name', 'Dhoni')

document.write(JSON.stringify(person));

document.write('<br>Has name changed (after set) =' +
    person.hasChanged());


var details = person.clone();

details.set({ eg: 'food', country: 'Sri', p_name: 'Changed' }, { silent: true })
details.set('ind', 2)

//output would be a deep clone of Person Model
document.write(JSON.stringify(details));
