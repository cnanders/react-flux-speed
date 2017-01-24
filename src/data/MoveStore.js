//import Immutable from 'immutable'
import { ReduceStore } from 'flux/utils'
import MoveActionTypes from '../actions/MoveActionTypes'
import AppDispatcher from './AppDispatcher'
//import Counter from './Counter'
import Move from './Move'
//import _ from 'underscore'
//import Utils from '../utils/Utils'

class MoveStore extends ReduceStore {

    // Registers store to call reduce() when the dispatcher dispatches 
    constructor() {
        super(AppDispatcher)
        //this.timeStart = performance.now()
    }

    getInitialState() {
        return new Move();
    }

    reduce(state, action) {
        var stateNew
        console.log('MoveStore reduce() ' + action.type);
        switch (action.type) {
            case MoveActionTypes.START_MOVE:
				console.log('fjdskl');
                state = state.set('moving', true);
                state = state.set('pivotX', action.x);
                state = state.set('pivotY', action.y);
				state = state.set('currentX', action.x);
                state = state.set('currentY', action.y);
                return state
			case MoveActionTypes.CONTINUE_MOVE:
                stateNew = state.set('currentX', action.x);
                stateNew = stateNew.set('currentY', action.y);
                return stateNew;
            case MoveActionTypes.END_MOVE:
				state = state.set('pivotX', 0);
				state = state.set('pivotY', 0);
				state = state.set('currentX', 0);
				state = state.set('currentY', 0);
                return state.set('moving', false);
            default:
                return state;
        }
    }
}

export default new MoveStore()
