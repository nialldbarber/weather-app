import React, { Component } from 'react';

export default class Weather extends Component {
	render() {
		return (
			<div>
				{this.props.city &&
				this.props.country && (
					<p>
						Location: {this.props.city}, {this.props.country}
					</p>
				)}
				{this.props.temp && <p>Temperature: {this.props.temp}</p>}
				{this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
				{this.props.desc && <p>Conditions: {this.props.desc}</p>}
			</div>
		);
	}
}
