//import Immutable from 'immutable'
import { ReduceStore } from 'flux/utils'
import SelectionActionTypes from '../actions/SelectionActionTypes'
import AppDispatcher from './AppDispatcher'
//import Counter from './Counter'
import Selection from './Selection'
//import _ from 'underscore'
//import Utils from '../utils/Utils'

class SelectionStore extends ReduceStore {

    // Registers store to call reduce() when the dispatcher dispatches 
    constructor() {
        super(AppDispatcher)
        this.timeStart = performance.now()
    }

    getInitialState() {
        return new Selection();
    }

    reduce(state, action) {
        var stateNew
        console.log('SelectionStore reduce() ' + action.type);
        switch (action.type) {
            case SelectionActionTypes.START_SELECTION:

                //console.log(action.event);
                //console.log('screen: (' + action.event.screenX + ',' + action.event.screenY + ')');
                //console.log('client: (' + action.event.clientX + ',' + action.event.clientY + ')');
                //console.log('page: (' + action.event.pageX + ',' + action.event.pageY + ')');
                //return state;
                stateNew = state.set('show', true);
                stateNew = stateNew.set('pivotX', action.x);
                stateNew = stateNew.set('pivotY', action.y);
                stateNew = stateNew.set('mouseX', action.x);
                stateNew = stateNew.set('mouseY', action.y);
                return stateNew;

            case SelectionActionTypes.EXPAND_SELECTION:
                stateNew = state.set('mouseX', action.x);
                stateNew = stateNew.set('mouseY', action.y);
                return stateNew;

            case SelectionActionTypes.END_SELECTION:
                return state.set('show', false);
            default:
                return state;
        }
    }
}

export default new SelectionStore()
