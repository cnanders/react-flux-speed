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
                stateNew = state.set('moving', true);
                stateNew = stateNew.set('pivotX', action.x);
                stateNew = stateNew.set('pivotY', action.y);
                return stateNew;
			case MoveActionTypes.CONTINUE_MOVE:
                stateNew = state.set('currentX', action.x);
                stateNew = stateNew.set('currentY', action.y);
                return stateNew;
            case MoveActionTypes.END_MOVE:
                return state.set('moving', false);
            default:
                return state;
        }
    }
}

export default new MoveStore()
