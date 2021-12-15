import React, {Component} from 'react'
import './App.css'
import {useNavigate} from 'react-router-dom'
import Slide from 'react-reveal/Slide'
import Lightspeed from 'react-reveal/LightSpeed'

let baseUrl = process.env.REACT_APP_API_URL

export default class Register extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            email: '',
            username: '',
            password: '',
            favoritePlaces: [],
            modalOpen: false,
            userLoggedIn: false,
            userRegistered: false,
        }
    }
    register = async (e) => {
        e.preventDefault()
        const url = baseUrl + '/users/register'
        console.log(e.target.email.value)
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    email: e.target.email.value,
                    username: e.target.username.value,
                    password: e.target.password.value
                }),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            if (response.status === 200) {
                this.getPlaces()
            }
        }
        catch (err) {
            console.log('Error => ', err)
        }
    }
    render() {
   
    return (
        <>
        <Slide left>
        <h1>Register</h1>
        </Slide>
        <form onSubmit={this.register}>
            <label htmlFor="email">email:</label>
            <Lightspeed right>
            <input type="text" id="email" name="email"></input>
            </Lightspeed>
            <label htmlFor="name">name:</label>
            <Lightspeed left>
            <input type="text" id="username" name="username"></input>
            </Lightspeed>
            <label htmlFor="password">password:</label>
            <Lightspeed right>
            <input type="password" id="password" name="password"></input>
            </Lightspeed>
            <br/>
            <input type="submit" value="Register"></input>
        </form>

        </>
    )
}
}