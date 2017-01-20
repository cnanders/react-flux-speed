import SquareActionTypes from './SquareActionTypes';
import AppDispatcher from '../data/AppDispatcher';
import Utils from '../utils/Utils';


const Actions = {
  
  /**
   * @param {String} [color = getRandomColor()] - Hex color "#cccfff
   */
  addSquare(color) {
	color = (typeof color !== 'undefined') ? color : Utils.getRandomColor();
	AppDispatcher.dispatch({ 
		type: SquareActionTypes.ADD_SQUARE,
		color: color
    });
  },
  
  prependSquare(color) {
    	color = (typeof color !== 'undefined') ? color : Utils.getRandomColor();
      AppDispatcher.dispatch({
        type: SquareActionTypes.PREPEND_SQUARE,
        color: color
      })
  },
  selectSquare(id) {
    AppDispatcher.dispatch({
      type: SquareActionTypes.SELECT_SQUARE,
      id: id
    });
  },

  /**
   * @prop {Int} n - the number of squares to add
   */
  addSquares(n)
  {
	  AppDispatcher.dispatch({
		  type: SquareActionTypes.ADD_SQUARES,
		  n: n 
	  });
  },
  blah()
  {
      AppDispatcher.dispatch({
		    type: SquareActionTypes.BLAH
	    });
  }
};

export default Actions;
