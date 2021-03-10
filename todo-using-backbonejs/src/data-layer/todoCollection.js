import { Model, Collection, Events } from 'backbone';
import todoModel from './todoModel';

let todoCollection = Collection.extend({
    model: todoModel,

    localStorage: new Backbone.LocalStorage("todos-backbone"),

    done: function () {
        return this.where({ done: true });
    },


    remaining: function () {
        return this.where({ done: false });
    },


})

let collection = new todoCollection();

export default collection