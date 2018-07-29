import React from 'react';

class Todo extends React.Component {
	render() {
		return (
			<li className={this.props.todo.completed ? 'completed' : ''}>
	<div className="view">
			<input className="toggle" type="checkbox" checked={this.props.todo.completed} onClick={() => this.props.toggleTodo(this.props.todo)}/>
		<label>{this.props.todo.value}</label>
		<button className="destroy" onClick={() => this.props.deleteTodo(this.props.todo)}></button>
		</div>
		<input className="edit" value={this.props.todo.value}/>
		</li>);
	}
}

export default Todo;
