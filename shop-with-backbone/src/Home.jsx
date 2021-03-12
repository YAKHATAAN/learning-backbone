import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { collection, cart } from './Data Layer/productCollection';
import ProductModel from './Data Layer/productModel';
import './style.scss'
import * as _ from 'lodash'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {

        let p1 = new ProductModel({
            id: 1,
            name: 'milk',
            price: 23,
            image: 'https://www.gannett-cdn.com/-mm-/4e57f417ab56d8147a59ed2deb8f3a4b0b446da3/c=0-108-2120-1306/local/-/media/2017/02/28/USATODAY/USATODAY/636238697589955973-GettyImages-479352566.jpg'
        })

        let p2 = new ProductModel({
            id: 2,
            name: 'rice',
            price: 50,
            image: 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/how-to-cook-rice.jpg'
        })

        let p3 = new ProductModel({
            id: 3,
            name: 'flour',
            price: 60,
            image: 'https://www.bakingbusiness.com/ext/resources/2020/5/WholeWheatFlour_Lead.jpg?t=1588771711&width=1080'
        })

        let p4 = new ProductModel({
            id: 4,
            name: 'chocolate',
            price: 60,
            image: 'https://www.history.com/.image/t_share/MTc4MjEwMDg3NDg2MTA1MTk3/chocolate-gettyimages-473741340.jpg'
        })

        let p5 = new ProductModel({
            id: 5,
            name: 'soap',
            price: 30,
            image: 'https://www.twincraft.com/hubfs/bare-bar-soap-array.jpg'
        })

        let p6 = new ProductModel({
            id: 6,
            name: 'tea',
            price: 50,
            image: 'https://images.financialexpress.com/2019/12/tata-Tea.jpg?w=1200&h=800&imflag=true'
        })


        let p7 = new ProductModel({
            id: 7,
            name: 'coffee',
            price: 20,
            image: 'https://live-production.wcms.abc-cdn.net.au/925f5a620821411566769c52377aec07'
        })

        collection.add([p1, p2, p3, p4, p5, p6, p7])

        let prods = JSON.parse(JSON.stringify(collection))

        this.setState({
            products: prods
        })

        console.log('prods : ' + prods)
    }

    addItemToCart = (id) => {
        cart.add(collection.get({ id }))
        console.log('cart updated : ', JSON.stringify(cart))
    }

    render() {
        return (
            <div>
                <Link to='/cart'>
                    <button className="header__link">CART {' ->'}</button>
                </Link>
                <h1>Welcome to Shop</h1>
                <div className="product_display">
                    {this.state.products.length > 0 && this.state.products.map(item => (
                        <div key={`product_${item.id}`} className="home__product">
                            <img src={item.image} alt="productImage" />
                            <h3>{_.startCase(_.toLower(item.name))}</h3>
                            <p>Rs. {item.price}</p>
                            <button onClick={() => this.addItemToCart(item.id)}>ADD TO CART</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
