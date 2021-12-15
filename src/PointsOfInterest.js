import React, {Component} from 'react'
import Geolocation from './Geolocation'
import Amadeus from 'amadeus'
import Slide from 'react-reveal/Slide'
import Lightspeed from 'react-reveal/LightSpeed'
import placeObject from './placeObject'

const amadeus = new Amadeus({
    clientId: process.env.API_KEY,
    clientSecret: process.env.API_SECRET
  });

export default class POI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userLoggedIn: true,
            baseUrl: 'https://api.amadeus.com/v1',
            placeName: '',
            default: 'https://api.amadeus.com/v1/reference-data/locations/pois?latitude=41.397158&longitude=2.160873&radius=1&page%5Blimit%5D=10&page%5Boffset%5D=0',
            searchUrl: '',
            latitude: '',
            longitude: '',
            radius: 1,
            pagelimit: 10,
            pageoffset: 0,
            authObject: [],
            categories: ['SIGHTS', 'NIGHTLIFE', 'RESTAURANT', 'SHOPPING'],
            authUrl: "https://api.amadeus.com/v1/security/oauth2/token"

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

    getAuth = () => {
        this.setState({
            authUrl: this.state.authUrl
        }, () => {
            fetch(this.state.authUrl, {
                method: 'GET',
                body: {
                    d:`grant_type=client_credentials&client_id=${process.ENV.API_KEY}&client_secret=${process.env.API_SECRET}`
                },
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                },
            })
            .then(response => {
                return response.json()
            }).then(json => {
                this.setState({
                    authObject: json[this.state.access_token],
                })
            },
            (err) => console.log(err))
        })
    }
    getPOI = async (event) => {
        event.preventDefault()
        const result = await this.getAuth()
        this.setState({
            searchUrl: this.state.baseUrl + "/reference-data/locations/pois?latitude=" + this.state.latitude + "&longitude=" + this.state.longitude + "&radius=1&page%5Blimit%5D=10&page%5Boffset%5D=0"
        }, () => {
            fetch(this.state.searchUrl, {
                headers: {
                    'Authorization': 'Bearer ' + result
                }
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
    componentDidMount() {
        this.getAuth()
    }

    render() {
        console.log(this.state.authObject)
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
            <placeObject/>
            </>
        )
    }
}