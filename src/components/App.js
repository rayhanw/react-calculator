import React from "react";
import ButtonPanel from "./ButtonPanel";
import Number from "./Number";
import "./App.css";

class App extends React.Component {
	state = {
		number: null,
		previousNumber: null,
		result: null,
		actualPreviousNumber: null
	};

	getNumber = number => {
		const operators = ["÷", "x", "+", "-", "="];

		if (number === "C") {
			this.setState({
				number: null,
				previousNumber: null,
				result: null,
				actualPreviousNumber: null
			});
		} else if (this.state.number === null) {
			this.setState({ number });
		} else {
			this.setState({ number: this.state.number + number });
		}

		this.setState({ previousNumber: number });
		if (!operators.includes(this.state.previousNumber)) {
			this.setState({ actualPreviousNumber: this.state.previousNumber });
		}

		if (
			this.state.number &&
			this.state.number[this.state.number.length - 1] === "="
		) {
			const parsedNumber = parseInt(this.state.actualPreviousNumber);
			const parsedNewNumber = parseInt(this.state.number);
			const { number } = this.state;
			if (number.includes("÷")) {
				this.setState({ result: parsedNewNumber / parsedNumber });
			} else if (number.includes("x")) {
				this.setState({ result: parsedNewNumber * parsedNumber });
			} else if (number.includes("+")) {
				this.setState({ result: parsedNewNumber + parsedNumber });
			} else if (number.includes("-")) {
				this.setState({ result: parsedNewNumber - parsedNumber });
			}
		}
	};

	renderResult() {
		const { result, number } = this.state;

		if (result) {
			if (
				result
					.toFixed(2)
					.toString()
					.endsWith(".00")
			) {
				return result;
			} else {
				return result.toFixed(2);
			}
		}

		return number;
	}

	render() {
		return (
			<div>
				<Number number={this.renderResult()} />
				<div className="container">
					<ButtonPanel onClick={this.getNumber} />
				</div>
			</div>
		);
	}
}

export default App;
