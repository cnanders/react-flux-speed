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
		this.timeStart = performance.now();

  }

  getInitialState () {
    return Immutable.List()
  }

	resetPerformance()
	{
		this.timeStart = performance.now();
	}
	logElapsedTime()
	{
			this.timeEnd = performance.now();
			const timeElapsed = Math.round((this.timeEnd - this.timeStart)*10)/10;
			console.log('Elapsed time: ' + timeElapsed + ' ms');
	}

  reduce (state, action) {
    
		var id;
		var stateNew;
		this.resetPerformance();
		console.log('SquareStore.reduce() ' + action.type);
   
	  switch (action.type) {

      case SquareActionTypes.PREPEND_SQUARE:
        
				id = Counter.increment();
				stateNew = state.unshift(
					new Square(
						{
          		id,
		  				color: action.color,
		  				selected: false
        		}
					)
				);

				this.logElapsedTime();
				return stateNew;

      case SquareActionTypes.ADD_SQUARE:
        // Don't add todos with no text.
        
        id = Counter.increment();
        stateNew = state.push(
					new Square(
						{
          		id,
		  				color: action.color,
		  				selected: false
        		}
					)
				);

				this.logElapsedTime();
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
				id = Counter.increment();
				return {
					id,
					color: Utils.getRandomColor(),
					selected: false
				} // value

			}
		);

		 stateNew = state.concat(squares);
		 this.logElapsedTime();
		 return stateNew;

      default:
        return state
    }
  }
}

export default new SquareStore()
