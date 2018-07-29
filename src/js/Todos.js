import React from 'react';
import Todo from './Todo.js';

class Todos extends React.Component {
    render() {
        return <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" onClick={() => this.props.completedAll()} />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {this.props.todos
                    .filter(item => this.filterType(item))
                    .map(item => <Todo key={item.id} todo={item} deleteTodo={this.props.deleteTodo} toggleTodo={this.props.toggleTodo} />)}
            </ul>
        </section>;
    }

    filterType(item) {
        if (this.props.displayType === "all") {
            return true;
        }

        if (this.props.displayType === "active") {
            return !item.completed;
        }

        if (this.props.displayType === "completed") {
            return item.completed;
        }
        return false;
    }
}


export default Todos;


