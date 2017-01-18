import Immutable from 'immutable'
import { ReduceStore } from 'flux/utils'
import SquareActionTypes from '../actions/SquareActionTypes'
import AppDispatcher from './AppDispatcher'
import Counter from './Counter'
import Square from './Square'
import _ from 'underscore';
import Utils from '../utils/Utils';

class SquareStore extends ReduceStore {

  // Registers store to call reduce() when the dispatcher dispatches 
  constructor () {
    super(AppDispatcher)
  }

  getInitialState () {
    return Immutable.OrderedMap()
  }

  reduce (state, action) {
    
		const timeStart = performance.now();
		console.log('SquareStore.reduce() ' + action.type);
   
	  switch (action.type) {

      case SquareActionTypes.PREPEND_SQUARE:
				var stateNew;
				var n;
				for (n = 0; n < 10; n++)
    		{	

				}
				return state;

      case SquareActionTypes.ADD_SQUARE:
        // Don't add todos with no text.
        
        const id = Counter.increment()
        var stateNew = state.set(id, new Square({
          id,
		  		color: action.color,
		  		selected: false
        }));

				const timeEnd = performance.now();
				const timeElapsed = Math.round((timeEnd - timeStart)*10)/10;
				console.log('SquareStore.reduce() ' + action.type + ' elapsed time: ' + timeElapsed);
				return stateNew;
      
      case SquareActionTypes.SELECT_SQUARE:
        return state.update(
          action.id,
          square => square.set('selected', !square.selected)
        )
	 case SquareActionTypes.ADD_SQUARES:
	 	 // Need to add a bunch.  
		 // Generate an array that can be imported into 
		 // Immutable.OrderedMap
		 /*
		 [
			 ["key", "value"],
			 ["key", "value"]
		 ]
		 */
		 var squares = _.map(
			_.range(action.n), // [1 2 ... n] 
			function(num)
			{
				const id = Counter.increment();
				return [
					id, // key
					{
						id: id,
						color: Utils.getRandomColor(),
						selected: false
					} // value
				]
			}
		);

		 return state.concat(squares);

      default:
        return state
    }
  }
}

export default new SquareStore()
