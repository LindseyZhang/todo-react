import React, { Component } from 'react';
import './TodoApp.css';
import Header from './js/Header.js';
import Todos from './js/Todos.js';
import Footer from './js/Footer.js';

class TodoApp extends Component {
	constructor(props) {
		super(props);
		this.addTodo = this.addTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.toggleTodo = this.toggleTodo.bind(this);
		this.completedAll = this.completedAll.bind(this);
		this.clearCompleted = this.clearCompleted.bind(this);
		this.alterDisplayType = this.alterDisplayType.bind(this);
		this.state = {
			todos: [
				{id: 1, value: "first line", completed: false},
				{id: 2, value: "second line", completed: true}
			],
			displayType: "all"
		}
	}

	addTodo(value) {
		let lastTodo = this.state.todos[this.state.todos.length - 1];
		const item = {id: lastTodo.id + 1, value: value, completed: false};
		this.setState({todos : this.state.todos.concat(item)});
	}

	deleteTodo(item) {
		const temp = this.state.todos;
		temp.splice(this.state.todos.indexOf(item), 1);
		this.setState({todos : temp});
	}

	toggleTodo(item) {
		item.completed = !item.completed;
		let newTodos = this.state.todos.map((todo) => todo.id === item.id ? item : todo);
		this.setState({todos: newTodos});
	}

	completedAll() {
		let newTodos = this.state.todos.map((todo) =>  {
			todo.completed = true;
			return todo;
		});
		this.setState({todos: newTodos});
	}

	clearCompleted() {
		let uncompleted = this.state.todos.filter((todo) => !todo.completed);
		this.setState({todos: uncompleted});
	}

	alterDisplayType(value) {
		this.setState({displayType: value});
	}

	render() {
		return (<div>
		<Header addTodo={this.addTodo}/>
		<Todos todos={this.state.todos} displayType={this.state.displayType} deleteTodo={this.deleteTodo} toggleTodo={this.toggleTodo} completedAll={this.completedAll}/>
		<Footer todos={this.state.todos} displayType={this.state.displayType} clearCompleted={this.clearCompleted} alterDisplayType={this.alterDisplayType} />
		</div>);
	}

}

export default TodoApp;