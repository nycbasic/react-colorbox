import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import NavBar from './Navbar';
import BoxForm from './BoxForm';
import Box from './Box';

class BoxList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			width: '',
			height: '',
			color: 'rgb(0,0,0)',
			colorBox: [],
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const { width, height, color } = this.state;
		let item = { width, height, color };
		this.setState((prevState) => {
			return {
				width: '',
				height: '',
				color: 'rgb(0,0,0)',
				colorBox: [...prevState.colorBox, item],
			};
		});
	}

	render() {
		const { colorBox } = this.state;
		const { handleChange, handleSubmit } = this;
		return (
			<React.Fragment>
				<NavBar />
				<BoxForm
					{...this.state}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
				<br />
				<Grid container justify="center">
					<Box colorBox={colorBox} />
				</Grid>
			</React.Fragment>
		);
	}
}

export default BoxList;
