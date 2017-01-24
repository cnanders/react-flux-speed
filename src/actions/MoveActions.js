import MoveActionTypes from './MoveActionTypes';
import AppDispatcher from '../data/AppDispatcher';
//import Utils from '../utils/Utils';

const Actions = {
  
  	/**
	 * @param {Number} x - mouse x position on mouseDown to start drag
	 * @param {Number} y - mouse y position on mouseDown to start drag
	 */
	startMove(x, y)
  	{
	  	AppDispatcher.dispatch({ 
			type: MoveActionTypes.START_MOVE,
		  	x,
			y
		});  
  	},
	continueMove(x, y)
  	{
	  	AppDispatcher.dispatch({ 
			type: MoveActionTypes.CONTINUE_MOVE,
		  	x,
			y
		});  
  	},
	endMove()
	{
		AppDispatcher.dispatch({ 
			type: MoveActionTypes.END_MOVE,
		}); 
	},
};

export default Actions;
