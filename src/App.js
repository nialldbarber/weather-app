import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const API_KEY = '16b138abc604456541878135b02a4e57';

export default class App extends Component {
	state = {
		temp: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		desc: undefined,
		error: undefined
	};

	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const api_call = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
		);
		const data = await api_call.json();

		if (city && country) {
			this.setState({
				temp: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				desc: data.weather[0].description,
				error: ''
			});
		}
	};

	render() {
		return (
			<Container>
				<Title />
				<Form getWeather={this.getWeather} />
				<Weather
					temp={this.state.temp}
					city={this.state.city}
					country={this.state.country}
					humidity={this.state.humidity}
					desc={this.state.desc}
					error={this.state.error}
				/>
			</Container>
		);
	}
}
