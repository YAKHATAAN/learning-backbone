import { Model } from 'backbone'

let ProductModel = Model.extend({
    defaults: {
        id: null,
        name: '',
        price: 0
    },

    getProductInfo: function () {
        console.log(this.id + '. ' + this.name + ' with price of Rs.' + this.price)
    }

})

export default ProductModel