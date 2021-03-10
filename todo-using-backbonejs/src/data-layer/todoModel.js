import { Model } from 'backbone';

let todoModel = Model.extend({

    defaults: {
        id: null,
        content: '',
        done: false
    },

    initialize: function () {
        // this.id = id
        // this.content = content
        return this
    }

})

export default todoModel