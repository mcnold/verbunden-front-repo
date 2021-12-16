import React, {Component} from 'react'
import Slide from 'react-reveal/Slide'
import Lightspeed from 'react-reveal/LightSpeed'

let baseUrl = process.env.REACT_APP_API_URL

export default class NewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            place: '',
            city: '',
            country: '',
            type: '',
            latitude: '',
            longitude: ''
        }
    }

    handleUrlChange = (event) => {
        this.setState({
            url: event.target.value,
        })
    }
    handlePlaceChange = (event) => {
        this.setState({
            place: event.target.value,
        })
    }

    handleCityChange = (event) => {
        this.setState({
            city: event.target.value,
        })
    }

    handleCountryChange = (event) => {
        this.setState({
            country: event.target.value,
        })
    }

    handleTypeChange = (event) => {
        this.setState({
            type: event.target.value,
        })
    }

    handleLatChange = (event) => {
        this.setState({
            latitude: event.target.value,
        })
    }

    handleLongChange = (event) => {
        this.setState({
            longitude: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(this.props.baseUrl + '/favoriteplaces/', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({url: this.state.url, place: this.state.place, city: this.state.city, country: this.state.country, type: this.state.type, latitude: this.state.latitude, longitude: this.state.longitude}),
            headers: {
                'Content-Type':'application/json'
            },
        }).then(res => {
            return res.json()
        }).then(data => {
            this.props.addFavoritePlaces(data.data)
            this.setState({
                url: '',
                place: '',
                city: '',
                country: '',
                type: '',
                latitude: '',
                longitude: ''
            })
        }).catch (error => console.error({'Error': error}))
    }

    render() {
        return (
            <>
            <Lightspeed right>
            <h2>Add a Favorite Place</h2>
            </Lightspeed>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="url">Link:</label>
                <Lightspeed left>
                <input type="url" id="url" onChange={ (e) => this.handleUrlChange(e)} value={this.state.url}/>
                </Lightspeed>
                <label htmlFor="place">Place:</label>
                <Lightspeed right>
                <input type="text" id="place" onChange={ (e) => this.handlePlaceChange(e)} value={this.state.place}/>
                </Lightspeed>
                <label htmlFor="city">City:</label>
                <Lightspeed left>
                <input type="text" id="city" onChange={ (e) => this.handleCityChange(e)} value={this.state.city}/>
                </Lightspeed>
                <label htmlFor="country">Country:</label>
                <Lightspeed right>
                <input type="text" id="country" onChange={ (e) => this.handleCountryChange(e)} value={this.state.country}/>
                </Lightspeed>
                <label htmlFor="type">Type:</label>
                <Lightspeed left>
                <input type="text" id="type" onChange={ (e) => this.handleTypeChange(e)} value={this.state.type}/>
                </Lightspeed>
                <label htmlFor="latitude">Latitude:</label>
                <Lightspeed right>
                <input type="text" id="latitude" onChange={ (e) => this.handleLatChange(e)} value={this.state.latitude}/>
                </Lightspeed>
                <label htmlFor="longitude">Longitude:</label>
                <Lightspeed left>
                <input type="text" id="longitude" onChange={ (e) => this.handleLongChange(e)} value={this.state.longitude}/>
                </Lightspeed>
                <br/>
                <input type="submit" value="Add a Favorite"></input>
            </form>
            </>
        )
    }
}