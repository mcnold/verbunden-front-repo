import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export default class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userLoggedIn: true,
            username: ''
        }
    }
    
    
    render() {
        return(
            <>
    
            <h1>Welcome!</h1>
            <h2>What would you like to do today?</h2>
            <Link to="/favoriteplaces">Review Places I've Been</Link><br/>
            <Link to="/pointsofinterest">Get Nearby Spots</Link><br/>
            <Link to="/video">Chat with a verbunden concierge</Link>
           
            </>
        )
    }
}