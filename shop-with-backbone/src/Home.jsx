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
            products: [],
        }
    }

    componentDidMount() {

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
