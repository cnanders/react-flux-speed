import TodoActionTypes from './TodoActionTypes';
import AppDispatcher from '../data/AppDispatcher';

// Note the ES6 Object style.  This is equivalent to.  
// Where was the good ES5/ES6/ES7 comparison?
// I think that was on the react-dnd tutorial
/*
{
  addTodo: function(){

  },
  deleteTodo: function(){

  },
  toggleTodo: function(){

  }
}
*/

/*
Also notice the other shorthand Objec syntax in ES6
{
  type: "blah",
  id
}
Is equivalent to (I think)
{
  type: "blah",
  id: id
}
*/

const Actions = {
  addTodo(text) {
    AppDispatcher.dispatch(
		  { 
      		type: TodoActionTypes.ADD_TODO,
      		text,
    	}
	  );
  },
  deleteTodo(id) {
    AppDispatcher.dispatch({
      type: TodoActionTypes.DELETE_TODO,
      id,
    });
  },
  toggleTodo(id) {
    AppDispatcher.dispatch({
      type: TodoActionTypes.TOGGLE_TODO,
      id,
    });
  },
};

export default Actions;
