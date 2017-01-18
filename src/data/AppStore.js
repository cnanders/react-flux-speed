import Immutable from 'immutable'
import { ReduceStore } from 'flux/utils'
import TodoActionTypes from '../actions/TodoActionTypes'
import AppDispatcher from './AppDispatcher'
import Counter from './Counter'
import Todo from './Todo'

class AppStore extends ReduceStore {

  // Registers store to call reduce() when the dispatcher dispatches 
  constructor () {
    super(AppDispatcher)
  }

  getInitialState () {
    return Immutable.OrderedMap()
  }

  reduce (state, action) {
    console.log('store.reduce ' + action.type);
    switch (action.type) {

      
      case TodoActionTypes.ADD_TODO:
        // Don't add todos with no text.
        if (!action.text) {
          return state
        }
        const id = Counter.increment()
        return state.set(id, new Todo({
          id,
          text: action.text,
          complete: false,
        }))
      case TodoActionTypes.DELETE_TODO:
        return state.delete(action.id)
        break;
      case TodoActionTypes.TOGGLE_TODO:
        return state.update(
          action.id,
          todo => todo.set('complete', !todo.complete)
        )
        break;

      default:
        return state
    }
  }
}

export default new AppStore()
