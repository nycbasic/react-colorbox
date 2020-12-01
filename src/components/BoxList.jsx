import React, { Component } from 'react';
import BoxForm from "./BoxForm";

class BoxList extends Component {
	constructor(props) {
        super(props)

        this.state = {
            width: 0,
            height: 0,
            color: null
        }
    }




	render() {
		return <BoxForm />;
	}
}

export default BoxList;
