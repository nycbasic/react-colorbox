import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const NavBar = (props) => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='h6'>Color Box Maker</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
