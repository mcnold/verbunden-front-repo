import React, {Component} from 'react'
import LightSpeed from 'react-reveal/LightSpeed'
import img from './NicePng_travel-stamp-png_2995376.png'
import Fade from 'react-reveal/Fade'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userLoggedIn: false
        }
    }
    render() {
        return (
            <>
            <LightSpeed left>
            <h1>Verbunden</h1>
            </LightSpeed>
            <LightSpeed right>
            <h2>see the world a little more closely.</h2>
            </LightSpeed>
            <br/>
            <Fade bottom>
            <img className="globe" src={img} alt="globe"></img>
            </Fade>
            </>
        )
    }
}