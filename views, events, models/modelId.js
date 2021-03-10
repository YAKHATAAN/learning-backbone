var Person = Backbone.Model.extend();
var person = new Person();
document.write("<b> Before setting unique identifier of model Person : </b>"
    , person.id);

document.write("<br>");
document.write("<b> Before setting unique identifier of model Person, CID: </b>"
    , person.cid);

document.write("<br>");


person.set({ id: 1 });

document.write("<b> After setting unique identifier of model Person : </b>"
    , person.id);

document.write("<br>");
document.write("<b> After setting unique identifier of model Person, CID: </b>"
    , person.cid);