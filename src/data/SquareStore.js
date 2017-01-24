import Immutable from 'immutable'
import { ReduceStore } from 'flux/utils'
import SquareActionTypes from '../actions/SquareActionTypes'
import AppDispatcher from './AppDispatcher'
import Counter from './Counter'
import Square from './Square'
import _ from 'underscore'
import Utils from '../utils/Utils'

class SquareStore extends ReduceStore {

  // Registers store to call reduce() when the dispatcher dispatches 
  constructor () {
    super(AppDispatcher)
    this.timeStart = performance.now()
  }

  getInitialState () {
    return Immutable.List()
  }

  resetPerformance () {
    this.timeStart = performance.now()
  }
  logElapsedTime () {
    this.timeEnd = performance.now()
    const timeElapsed = Math.round((this.timeEnd - this.timeStart) * 10) / 10
    console.log('Elapsed time: ' + timeElapsed + ' ms')
  }

  reduce (state, action) {
    var id
    var stateNew
    this.resetPerformance()
    console.log('SquareStore.reduce() ' + action.type)

    switch (action.type) {

      case SquareActionTypes.MOVE_SELECTED_SQUARES:

        // ACCELERATION BAD.  NEED TO FIGURE THIS OUT.  CONSTANTLY UPDATING.  
        // MAYBE we need to set a translation of a group around each square to properly handle this.
        // During the drag and only change it at the end in the state.  Don't know.

        /*
        var deltaX = action.move.currentX - action.move.pivotX;
        var deltaY = action.move.currentY - action.move.pivotY;
        var squareNew
        return state.map(
            (square) => {

                if (square.selected)
                {
                    square = square.set('x', square.x + deltaX);
                    return square.set('y', square.y + deltaY);
                }
                else
                {
                    return square;
                }
            }
        );
        */
        return state;

      case SquareActionTypes.SELECT_INCLUDED_SQUARES:
        
        state = state.map(
            (square) => {
                if (Utils.squareIsInSelection(square, action.selection))
                {
                    if (!square.selected)
                    {
                        return square.set('selected', true); 
                    } 
                    else
                    {
                        return square;
                    }     
                }
                else
                {
                    if (square.selected)
                    {
                        return square.set('selected', false);
                    }
                    else {
                        return square;
                    }
                }
            }


        )
        return state;

      case SquareActionTypes.BLAH:
        console.log('blah!')
        return state
      case SquareActionTypes.PREPEND_SQUARE:

        id = Counter.increment()
        stateNew = state.unshift(
          new Square(
            {
              id,
              color: action.color,
              selected: false,
              x: Math.random() * 1000,
              y: Math.random() * 500,
              height: Math.random() * 10 + 30,
              width: Math.random() * 10 + 30
            }
          )
        )

        this.logElapsedTime()
        return stateNew

      case SquareActionTypes.ADD_SQUARE:
      // Don't add todos with no text.

        id = Counter.increment()
        stateNew = state.push(
          new Square(
            {
              id,
              color: action.color,
              selected: false,
              x: Math.random() * 1000,
              y: Math.random() * 500,
              height: Math.random() * 10 + 30,
              width: Math.random() * 10 + 30
            }
          )
        )

        this.logElapsedTime()
        return stateNew

      case SquareActionTypes.SELECT_SQUARE:
        console.log('SELECT' + action.id)
        console.log(state)
        return state.update(
          action.id,
          square => {
            console.log(square); return square.set('selected', !square.selected);}
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
          function (num) {
            id = Counter.increment()
            return new Square({
              id,
              color: Utils.getRandomColor(),
              selected: false,
              x: Math.random() * 1000,
              y: Math.random() * 500,
              height: Math.random() * 10 + 30,
              width: Math.random() * 10 + 30
            }) // valuek

          }
        )

        stateNew = state.concat(squares)
        this.logElapsedTime()
        return stateNew

        
        case SquareActionTypes.UNSELECT_ALL:
            return state.map(
                (square) => {
                    if (square.selected)
                    {
                        return square.set('selected', false); 
                    } 
                }
            );
        case SquareActionTypes.JOG_SQUARE_X:

            return state.update(
                action.id,
                square => square.set('x', square.x + 10)
            )
      default:
        return state
    }
  }
}

export default new SquareStore()
