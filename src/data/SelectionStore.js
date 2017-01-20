import Immutable from 'immutable'
import { ReduceStore } from 'flux/utils'
import SelectionActionTypes from '../actions/SelectionActionTypes'
import AppDispatcher from './AppDispatcher'
import Counter from './Counter'
import Selection from './Selection'
import _ from 'underscore'
import Utils from '../utils/Utils'

class SelectionStore extends ReduceStore {

    // Registers store to call reduce() when the dispatcher dispatches 
    constructor() {
        super(AppDispatcher)
        this.timeStart = performance.now()
    }

    getInitialState() {
        return Selection
    }


    reduce(state, action) {
        var id
        var stateNew
        this.resetPerformance()
        console.log('SelectionStore.reduce() ' + action.type)

        switch (action.type) {
            case SelectionActionTypes.START_SELECTION:
                stateNew = state.set('show', true);
                stateNew = state.set('x', action.x);
                return stateNew.set('y', action.y);

            case SelectionActionTypes.EXPAND_SELECTION:
                stateNew = state.set('width', action.x - state.x);
                return stateNew.set('height', state.y - action.y);

            case SelectionActionTypes.END_SELECTION:
                return state.set('show', false);
            default:
                return state;
        }
    }
}

export default new SelectionStore()
