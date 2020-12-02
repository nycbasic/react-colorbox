import React from 'react';
import { TextField } from '@material-ui/core';


const BoxForm = ({ width, height, color, handleChange, handleSubmit }) => {
	console.log(width);
	return (
		<form onSubmit={handleSubmit}>
			<h1>Enter The Box Data</h1>
			<TextField
				label='Width'
				type='number'
				name='width'
				size='small'
				value={width}
				onChange={handleChange}
			/>
			<br />
			<TextField
				label='Height'
				type='number'
				name='height'
				value={height}
				onChange={handleChange}
			/>
			<br />
			<br />
			<input
				width='500'
				type='color'
				name='color'
				value={color}
				onChange={handleChange}
			/>
			<br />
			<br />
			<button
				type='submit'
				disabled={(width && height) === '' || (width && height) === '0'}
			>
				Add Box
			</button>
		</form>
	);
};

export default BoxForm;
