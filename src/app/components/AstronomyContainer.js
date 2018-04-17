// require('dotenv').config()
import React, { Component } from 'react';
import AstronomyCard from './AstronomyCard';
// import axios from 'axios';
import { connect } from 'react-redux';
import fetchData from '../../actions/fetch_data';


class AstronomyContainer extends Component {

	// constructor() {
	// 	super();

	// 	this.state = {
	// 		astronomy: []
	// 	}
	// }

	componentWillMount() {
		this.props.fetchData();
	}

	componentDidMount() {
		// const API_KEY = 'AmXuO49rtcMqBYi4dmM3d8tRKshOs2GJ7bqz6TGR'
		// const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='

		// axios.get(END_POINT + API_KEY)
		// 	.then(response => {
		// 		this.setState({
		// 			astronomy: response.data
		// 		})

		// 		console.log(this.state.astronomy)
		// 	})
		// 	.catch(error => {
		// 		console.log(error, 'failed to fetch')
		// 	});
	}


	render() {
		// const { astronomy } = this.state;
		return(
			<AstronomyCard data={this.props.astronomy} />
		)
	}
}

function mapStateToProps(state) {
	return { astronomy: state.astronomy }
}

export default connect(mapStateToProps, { fetchData })(AstronomyContainer);