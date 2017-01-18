import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import AppStore from '../data/AppStore';
import TodoActions from '../actions/TodoActions';

function getStores() {
  return [
    AppStore,
  ];
}

function getState() {
  return {
    todos: AppStore.getState(),
	onDeleteTodo: TodoActions.deleteTodo,
    onToggleTodo: TodoActions.toggleTodo,
  };
}

// Need to use createFunctional since AppView is not a Component, it is a 
// stateless functional component
export default Container.createFunctional(AppView, getStores, getState);