import { Collection } from 'backbone'
import ProductModel from './productModel';


let ProductCollection = Collection.extend({
    model: ProductModel,
    getProductsInfo: function () {
        this.forEach(product => {
            console.log(JSON.stringify(product))
        });
    }

})

let collection = new ProductCollection()
let cart = new ProductCollection()

export { collection, cart }