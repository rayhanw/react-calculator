import React from "react";

import './Number.css';

const Number = props => {
  return (
		<div className="text-white d-flex justify-content-end align-items-center bg-dark-blue mb-2">
			<h1 className="mr-3 mb-0">{props.number}</h1>
		</div>
	);
}

export default Number;
