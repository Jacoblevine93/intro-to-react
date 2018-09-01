import React, { Component } from 'react';

class ToDo extends Component {

	render() {
		return(
			<li>
				<input type="checkbox" checked={ this.propsisCompleted } />
				<span> {this.props.description} </span>

			</li>
			);
	}
}

export default ToDo;