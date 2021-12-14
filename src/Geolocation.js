import React, {Component} from 'react'
import Slide from 'react-reveal/Slide'


export default class Geolocation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userLoggedIn : true,
            latitude: '',
            longitude: '',
            isLoading: true

        }
    }

    getGeolocation() {
        if("geolocation" in navigator) {
            console.log("Available")
            navigator.geolocation.getCurrentPosition((position)=> {
                const currlat = position.coords.latitude
                const currlong = position.coords.longitude
                this.setState( {
                    latitude: currlat,
                    longitude: currlong
                }, () => {
                    this.setState( {
                        isLoading: false
                    })
                })
                console.log("Latitude is: ", currlat)
                console.log("Longitude is: ", currlong)
            })
            
        
            
        }else{
            console.log("Not Available")
        }



    }
    updateGeolocation() {
        if("geolocation" in navigator) {
            console.log("Available")
            navigator.geolocation.watchPosition((position) => {
                this.setState = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            })
        }else{
            console.log("Not Available")
        }



    }
    componentDidMount() {
        this.getGeolocation()
        this.updateGeolocation()
    }
    render() {
        console.log(this.state)

        return (
            <div>
                <Slide left>
                <td className="geo" onClick={() =>{this.getGeolocation()}}>Find Me</td>
                </Slide>
                <br/>
                <Slide right>
                <td className="geo" onClick={() =>{this.updateGeolocation()}}>Update My Location</td>
                </Slide>
                {
                    this.state.isLoading ? "Loading...":
                    <h3>My position is {this.state.latitude}, {this.state.longitude}</h3>
                }
                
            </div>
        )
    }
}