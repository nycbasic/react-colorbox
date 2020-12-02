import React from 'react';
import { TextField, Typography, Button } from '@material-ui/core';

const BoxForm = ({ width, height, color, handleChange, handleSubmit }) => {
	console.log(width);
	return (
		<form onSubmit={handleSubmit}>
			<br />
			<Typography variant='h5'>Enter Color Box Data</Typography>
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
			<Button
				color='primary'
				variant='contained'
				type='submit'
				disabled={(width && height) === '' || (width && height) === '0'}
			>
				Add Box
			</Button>
		</form>
	);
};

export default BoxForm;
