import React, {Component} from 'react'
import Slide from 'react-reveal/Slide'

export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userLoggedIn : true
        }
    }
    render() {
        return (
            <>
            <Slide left>
            <h1>The world is yours to explore. </h1>
            </Slide>
            <Slide right>
            <h2>We just want to make your journey that much better.</h2>
            </Slide>
            <Slide bottom>
            <p>
                Verbunden is a travel concierge service that lets you connect with local
                guides, virtually, at any time.<br/>
            
                Get local secrets, the tips on best spots,
                and everything you would want with a local tour guide on demand through
                our application.</p>
            <p>
                More of the self sufficient type? Track local points of interest to explore.
                Track places you've visited, and store them as a virtual passport stamp!<br/>
            </p>
            <p>
                You want to see the world a little more closely. We can definitely help with that.
            </p>
            </Slide>
            </>
        )
    }
}