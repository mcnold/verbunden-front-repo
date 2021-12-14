import React, {Component} from 'react'
import img from './NicePng_travel-stamp-png_2995376.png'

export default class Logout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userLoggedIn: true,
        }
    }
    logoutUser = async (e) => {
        this.setState({
            userLoggedIn: false
            
        })
        console.log("user logged out")
    }
    render() {
        return (
            <>
            <h1>See you on your next journey!</h1>
            <img src={img} className="globe" alt="globe"></img>
            <button className="logbtn" onClick={this.logoutUser}>Log Out</button>
            {
                    this.state.userLoggedIn ? null : <h3>You are now logged out.</h3>
                }
            </>
        )
    }
}