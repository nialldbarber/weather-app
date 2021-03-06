import React, { Component } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
	position: relative;
	margin-bottom: 45px;
	input {
		font-size: 18px;
		padding: 10px 10px 10px 5px;
		display: block;
		width: 300px;
		border: none;
		border-bottom: 1px solid #757575;
		&:focus {
			outline: none;
		}
		&:focus ~ label {
			top: -20px;
			font-size: 14px;
			color: #5264ae;
		}
		&:focus ~ .bar:before,
		&:focus ~ .bar:after {
			width: 50%;
		}
		&:focus ~ .highlight {
			animation: inputHighlighter 0.3s ease;
		}
	}
	label {
		color: #999;
		font-size: 18px;
		font-weight: normal;
		position: absolute;
		pointer-events: none;
		left: 5px;
		top: 10px;
		transition: 0.2s ease all;
	}
`;

const BottomBar = styled.span`
	position: relative;
	display: block;
	width: 300px;
	&:before,
	&:after {
		content: '';
		height: 2px;
		width: 0;
		bottom: 1px;
		position: absolute;
		background: #5264ae;
		transition: 0.2s ease all;
	}
	&:before {
		left: 50%;
	}
	&:after {
		right: 50%;
	}
`;

const Highlight = styled.span`
	position: absolute;
	height: 60%;
	width: 100px;
	top: 25%;
	left: 0;
	pointer-events: none;
	opacity: 0.5;
`;

const Button = styled.button`
	border: none;
	outline: none;
	padding: 1.2rem 1.5rem;
	background: #5264ae;
	color: #fff;
	font-size: 1.7rem;
	border-radius: 3px;
	cursor: pointer;
`;

export default class Form extends Component {
	render() {
		return (
			<form onSubmit={this.props.getWeather}>
				<FormContainer class="group">
					<input type="text" name="city" />
					<Highlight class="highlight" />
					<BottomBar class="bar" />
					<label>City</label>
				</FormContainer>
				<FormContainer class="group">
					<input type="text" name="country" />
					<Highlight class="highlight" />
					<BottomBar class="bar" />
					<label>Country</label>
				</FormContainer>
				<Button type="submit">Get Weather</Button>
			</form>
		);
	}
}
