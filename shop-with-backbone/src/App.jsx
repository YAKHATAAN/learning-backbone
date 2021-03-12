
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from 'react'
import Cart from './Cart'
import Home from './Home'

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>

                        <Route path="/cart">
                            <Cart />
                        </Route>

                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
