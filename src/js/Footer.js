import React from 'react';

class Footer extends React.Component {
	render() {
		return <footer className="footer">
			<span className="todo-count"><strong>{this.props.todos.filter(todo => todo.completed === false).length}</strong> item left</span>
		<ul className="filters">
			<li>
			<a className={this.props.displayType === "all"? 'selected' :''} href="#/" onClick={() => this.props.alterDisplayType("all")}>All</a>
		</li>
		<li>
		<a className={this.props.displayType === "active"? 'selected' :''} href="#/active" onClick={() => this.props.alterDisplayType("active")}>Active</a>
		</li>
		<li>
		<a className={this.props.displayType === "completed"? 'selected' :''} href="#/completed" onClick={() => this.props.alterDisplayType("completed")}>Completed</a>
		</li>
		</ul>
		<button className="clear-completed" onClick={() => this.props.clearCompleted()}>Clear completed</button>
		</footer>;
	}
}

export default Footer;
