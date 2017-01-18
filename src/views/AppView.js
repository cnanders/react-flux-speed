import React from 'react';

function AppView(props) {
  return (
    <div>
      <Header {...props} />
      <Main {...props} />
      <Footer {...props} />
    </div>
  );
}

function Header(props) {
  return (
    <header id="header">
      <h1>Todos</h1>
    </header>
  );
}

function TodoLi(props)
{
	return (
		<li>
			<div className="view">
				<input
				className="toggle"
				type="checkbox"
				checked={props.todo.complete}
				onChange={
					// Empty function for now, we will implement this later.
					() => {props.onToggleTodo(props.todo.id)}
				}
				/>
				<label>{props.todo.text}</label>
				<button
				className="destroy"
				onClick={
					// Empty function for now, we will implement this later.
					() => {props.onDeleteTodo(props.todo.id)}
				}
				/>
			</div>
		</li>
	)	
}
function Main(props) {
  if (props.todos.size === 0) {
    return null;
  }

  // They syntax below uses new ES6 spread syntax
  // props.todos is an Immutable.OrderedMap
  // the values() method returns an iterator of the values
  // then the spread syntax ... on that iterator inside of brackets creates
  // a new Array which is then reversed with reverse() and 
  return (
    <section id="main">
      <ul id="todo-list">
        {[...props.todos.values()].reverse().map(todo => (
          <TodoLi 	key={todo.id} 
		  			todo={todo}
					onDeleteTodo={props.onDeleteTodo}
					onToggleTodo={props.onToggleTodo}
		/>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  if (props.todos.size === 0) {
    return null;
  }

  const remaining = props.todos.filter(todo => !todo.complete).size;
  const phrase = remaining === 1 ? ' item left' : ' items left';
  return (
    <footer id="footer">
      <span id="todo-count">
        <strong>
          {remaining}
        </strong>
       {phrase}
      </span>
    </footer>
  );
}


export default AppView;
