import React, { Component } from "react";

import './Number.css';

class Number extends Component {
	render() {
		return (
			<div className="text-white d-flex justify-content-end align-items-center bg-dark-blue mb-2">
				<h1 className="mr-3 mb-0">{this.props.number}</h1>
			</div>
		);
	}
}

export default Number;
