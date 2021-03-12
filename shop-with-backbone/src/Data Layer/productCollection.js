import { Collection } from 'backbone'
import ProductModel from './productModel';
import { list } from './productsData';


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

for (let i = 0; i < list.length; i++) {
    let p = new ProductModel({
        id: list[i].id,
        name: list[i].name,
        image: list[i].image,
        price: list[i].price,
    })
    collection.add(p)
}

export { collection, cart }