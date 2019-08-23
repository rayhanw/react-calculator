import React, { Component } from 'react'

import Button from './Button';
import './ButtonPanel.css';

class ButtonPanel extends Component {

  getNumberFromClick = async (number) => {
    this.props.onClick(number);
  }

  render() {
    return (
			<div>
        <div className="button-panel-top">
          <Button value="C" numberValue={this.getNumberFromClick} />
          <Button value="÷" numberValue={this.getNumberFromClick} />
        </div>
				<div className="button-panel">
					<Button value="7" numberValue={this.getNumberFromClick} />
					<Button value="8" numberValue={this.getNumberFromClick} />
					<Button value="9" numberValue={this.getNumberFromClick} />
          <Button value="x" numberValue={this.getNumberFromClick} />
				</div>
				<div className="button-panel">
					<Button value="4" numberValue={this.getNumberFromClick} />
					<Button value="5" numberValue={this.getNumberFromClick} />
					<Button value="6" numberValue={this.getNumberFromClick} />
          <Button value="-" numberValue={this.getNumberFromClick} />
				</div>
				<div className="button-panel">
					<Button value="1" numberValue={this.getNumberFromClick} />
					<Button value="2" numberValue={this.getNumberFromClick} />
					<Button value="3" numberValue={this.getNumberFromClick} />
          <Button value="+" numberValue={this.getNumberFromClick} />
				</div>
				<div className="button-panel-bottom">
					<Button value="0" numberValue={this.getNumberFromClick} />
					<Button value="." numberValue={this.getNumberFromClick} />
					<Button value="=" numberValue={this.getNumberFromClick} />
				</div>
			</div>
		);
  }
}

export default ButtonPanel;
