import { Model, Collection, Events } from 'backbone';

let t_id = 1001

const getNext = () => t_id++

let todoModel = Model.extend({

    defaults: {
        id: null,
        content: '',
        done: false
    },

    initialize: function (content) {
        this.id = getNext()
        this.content = content
        return this
    }

})

export default todoModel