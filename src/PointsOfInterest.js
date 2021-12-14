import React, {Component} from 'react'
import Geolocation from './Geolocation'
import Amadeus from 'amadeus'
import Slide from 'react-reveal/Slide'
import Lightspeed from 'react-reveal/LightSpeed'

const amadeus = new Amadeus({
    clientId: 'M3RJq3uoqlOZYlK0g9Eau2AVrvCwuXgx',
    clientSecret: 'aVf293vaVRV4aHDK'
  });

export default class POI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userLoggedIn: true,
            baseUrl: 'https://test.api.amadeus.com/v1',
            apikey: 'M3RJq3uoqlOZYlK0g9Eau2AVrvCwuXgx',
            placeName: '',
            default: 'https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=41.397158&longitude=2.160873&radius=1&page%5Blimit%5D=10&page%5Boffset%5D=0',
            searchUrl: '',
            latitude: '',
            longitude: '',
            radius: 1,
            pagelimit: 10,
            pageoffset: 0,
            categories: ['SIGHTS', 'NIGHTLIFE', 'RESTAURANT', 'SHOPPING']

        }
    }
    handleLatChange = (event) => {
        this.setState({
            latitude: event.target.value
        })
    }
    handleLongChange = (event) => {
        this.setState({
            longitude: event.target.value
        })
    }

    getPOI = (event) => {
        event.preventDefault()
        this.setState({
            searchUrl: this.state.baseUrl + "/reference-data/locations/pois?latitude=" + this.state.latitude + "&longitude=" + this.state.longitude + "&radius=1&page%5Blimit%5D=10&page%5Boffset%5D=0"
        }, () => {
            fetch(this.state.searchUrl, {

            })
            .then(response => {
                return response.json()
            }).then(json => {
                console.log(json)
                console.log("Here")
                this.setState({
                    placeObject: json[this.state.data],
                })
            },
            (err) => console.log(err))
        })
    }
    render() {
        return (
            <>
            <Slide left>
            <h1>Points of Interest</h1>
            </Slide>
            <Geolocation favoritePlaces={this.state.favoritePlaces}/>
            <form onSubmit={this.getPOI}>
            <label>Find Points of Interest(Lat,Long)</label>
            <Lightspeed right>
            <input
            id='latitude'
            type='text'
            value={this.state.latitude}
            onChange={this.handleLatChange}
            />
            </Lightspeed>
            <br/>
            <Lightspeed left>
            <input
            id='longitude'
            type='text'
            value={this.state.longitude}
            onChange={this.handleLongChange}
            />
            </Lightspeed>
            <br/>
            <Lightspeed right>
            <input type='submit'
            value='Get Info'
            />
            </Lightspeed>
            </form>
            </>
        )
    }
}