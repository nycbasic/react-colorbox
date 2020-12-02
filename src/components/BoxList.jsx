import React, { Component } from 'react';
import BoxForm from './BoxForm';
import Box from './Box';

class BoxList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			width: "",
			height: "",
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
				width: 0,
				height: 0,
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
				<BoxForm
					{...this.state}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
				<Box colorBox={colorBox} />
			</React.Fragment>
		);
	}
}

export default BoxList;
