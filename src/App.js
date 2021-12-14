import React, {Component} from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Welcome from './Welcome'
import Favorite from './Favorite'
import About from './About'
import LogOut from './LogOut'
import PointsOfInterest from './PointsOfInterest'
import Place from './Place'
import './App.css'
import Fade from 'react-reveal/Fade'
import Video from './Video'


export default class App extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            email: '',
            username: '',
            password: '',
            favoritePlaces: [],
            modalOpen: false,
            userLoggedIn: false,
            url: '',
            place: '',
            city: '',
            country: '',
            type: '',
            latitude: '',
            longitude: ''
        }
    }

    render() {
        return (
            <Router>
            
                <header>
                <nav>
             
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users/register">Register</Link>
                <Link to="/users/login">Login</Link>
                <Link to="/favoriteplaces">Favorite Places</Link>
                <Link to="/pointsofinterest">Points of Interest</Link>
                <Link to="/video">Concierge</Link>
                <Link to="/logout">LogOut</Link>
                </nav>
                </header>

                <Routes>
                    <Route path="/"element={<Home/>}/>
                    <Route path="/welcome" element={<Welcome/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/users/register" element={<Register/>}/>
                    <Route path="users/login" element={<Login/>}/>
                    <Route path="favoriteplaces" element={<Favorite/>}/>
                    <Route path="/pointsofinterest" element={<PointsOfInterest/>}/>
                    <Route path="/logout" element={<LogOut/>}/>
                    <Route path="/favoriteplaces/:id" element={<Place/>}/>
                    <Route path="/video" element={<Video/>}/>
                </Routes>
                <footer>©2021 Michele Godleske. All Rights Reserved.</footer>

            </Router>
            
                

            
           
            
        )
    }
}