import React, {Component} from 'react'
import Favorite from './Favorite'
import Slide from 'react-reveal/Slide'
import LightSpeed from 'react-reveal/LightSpeed'

let baseUrl = 'http://localhost:8000'


export default class App extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            email: '',
            username: '',
            password: '',
            favoritePlaces: [],
            modalOpen: false,
            userLoggedIn: false
        }
    }
    getPlaces = () => {
        fetch(baseUrl + '/favoriteplaces', {
            credentials: 'include'
        })
        .then(res => {
            if(res.status === 200) {
                return res.json()
            } else {
                return []
            }
        }).then(data => {
            console.log(data)
            this.setState({favoriteplaces: data.data})
        })
    }

    loginUser = async (e) => {
        console.log('loginuser')
        e.preventDefault()
        const url = baseUrl + '/users/login'
        const loginBody = {
            email: e.target.email.value,
            username: e.target.username.value,
            password: e.target.password.value
        }
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(loginBody),
                headers: {
                    'Content-Type' : 'application/json'
                },
                credentials: 'include'
            })
            console.log(response)
            console.log("Body: ", response.body)

            if (response.status === 200) {
                response.json().then(
                    body => console.log('Successfully logged in', body),
                this.setState({
                    email: '',
                    username: '',
                    password: '',
                    userLoggedIn: true
                })
            )
            }
        }
        catch (err) {
            console.log('Error => ', err)
        }
    }
    
    render() {
        
    return (
        <>
        <Slide right>
        <h1>Login</h1>
        </Slide>
        <form onSubmit={this.loginUser}>
            <label htmlFor="email">email:</label>
            <LightSpeed left>
            <input type="text" id="email" name="email"></input>
            </LightSpeed>
            <label htmlFor="name">name:</label>
            <LightSpeed right>
            <input type="text" id="username" name="username"></input>
            </LightSpeed>
            <label htmlFor="password">password:</label>
            <LightSpeed left>
            <input type="password" id="password" name="password"></input>
            </LightSpeed>
            <br/>
            <input type="submit" value="Login"></input>
        </form>
                {
                    this.state.userLoggedIn ? <h3>You are now logged in.</h3> : null
                }
        
        </>
    )
}
}
