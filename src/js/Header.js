import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header className="header">
			<h1>todos</h1>
			<input className="new-todo" onKeyDown={(e) => {
			if (e.keyCode === 13 && e.target.value.trim() !== '') {
				this.props.addTodo(e.target.value.trim());
				e.target.value = '';
			}
		}} placeholder="What needs to be done?" autoFocus/>
		</header>
	);
	}
}

export default Header;
