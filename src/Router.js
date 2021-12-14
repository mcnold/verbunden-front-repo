import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Welcome from './Welcome'
import Favorite from './Favorite'
import NewForm from './NewForm'

export default class Router extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen : false,
            userloggedIn : true
        }
    }
    render() {
        return (
            <>
            <Welcome/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Welcome/>}>
                        <Route index element={<Welcome/>}>
                        <Route path="/favoriteplaces" element={<Favorite />}>
                            <Route path=":favoriteplacesid" element={<Favorite/>}>
                            <Route path="new" element={<NewForm/>}>
                            </Route>
                            </Route>
                        </Route>
                    </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
            </>
        )
    }
}
