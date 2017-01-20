import SelectionActionTypes from './SelectionActionTypes';
import AppDispatcher from '../data/AppDispatcher';
import Utils from '../utils/Utils';


const Actions = {
  
  	/**
	 * @param {Number} x - left edge of selection box
	 * @param {Number} y - top edge of selection box
	 */
	startSelection(x, y)
  	{
	  	AppDispatcher.dispatch({ 
			type: SelectionActionTypes.START_SELECTION,
		  	x,
		  	y
		});  
  	},

	/**
	 * @param {Number} x - right edge of selection box
	 * @param {Number} y - bottom edge of selection box
	 */
	expandSelection(x, y)
	{
		AppDispatcher.dispatch({ 
			type: SelectionActionTypes.EXPAND_SELECTION,
		  	x,
		  	y
		}); 	
	},
	endSelection()
	{
		AppDispatcher.dispatch({ 
			type: SelectionActionTypes.END_SELECTION,
		}); 
	},
};

export default Actions;
