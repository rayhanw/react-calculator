import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
	state = { number: null };

	handleClick = async e => {
    await this.setState({ number: e.currentTarget.value });
    await this.props.numberValue(this.state.number);
	};

	render() {
		return (
			<button
				value={this.props.value}
				onClick={this.handleClick}
				className="btn btn-light btn-text btn-item d-flex justify-content-center align-items-center"
			>
				{this.props.value}
			</button>
		);
	}
}


export default Button;
