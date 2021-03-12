import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { cart } from './Data Layer/productCollection';

export default class Cart extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cart: [],
            totalPrice: 0
        }
    }

    getTotal(items) {
        let total = 0
        items.forEach(item => {
            total += item.price
        });
        this.setState({
            totalPrice: total
        })
    }

    componentDidMount() {
        let cartItems = JSON.parse(JSON.stringify(cart))
        this.setState({
            cart: cartItems
        })

        this.getTotal(cartItems)
    }

    updateCart = () => {
        let cartItems = JSON.parse(JSON.stringify(cart))
        this.setState({
            cart: cartItems
        })

        this.getTotal(cartItems)
    }

    removeItem = (id) => {
        cart.remove({ id })
        this.updateCart();
        console.log('item removed ' + JSON.stringify(cart))

    }

    redirectToHome = () => { }

    confirmOrder = () => {
        cart.reset();
        alert('Thank you for purchasing!')
        this.updateCart();

        // setTimeout may cause an error
        setTimeout(() => {
            return <Redirect to='/' />
        }, 2000)
    }



    render() {
        return (
            <div>

                <Link to='/'>
                    <button className="header__link">{'<- '}HOME</button>
                </Link>
                <h1>Your Cart</h1>

                <div className="cart_display">

                    {this.state.cart && this.state.cart?.map(item => (
                        <div key={`product_${item.id}`} className="home__product">
                            <img src={item.image} alt="productImage" />
                            <h3>{item.name}</h3>
                            <p>Rs. {item.price}</p>
                            <button onClick={() => this.removeItem(item.id)}>remove</button>
                        </div>
                    ))
                    }
                </div>

                <h2>Total: Rs. {this.state.totalPrice}</h2>
                <Link to='/'>
                    <button disabled={this.state.totalPrice < 1} onClick={this.confirmOrder}>PLACE ORDER</button>
                </Link>
            </div >
        )
    }
}
