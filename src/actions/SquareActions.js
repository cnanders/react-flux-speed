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
    addSquares(n) {
        AppDispatcher.dispatch({
            type: SquareActionTypes.ADD_SQUARES,
            n: n
        });
    },
    blah() {
        AppDispatcher.dispatch({
            type: SquareActionTypes.BLAH
        });
    },

    /**
     * Find all squares within the seleciton region bound by pivotX,Y, mouseX,Y
     * and set Square.selected = true for each
     * @param {Selection | Object} selection - see Selection.
     * @param {Number} selection.pivotX - see Selection.pivotX
     * @param {Number} selection.pivotY - see Selection.pivotY
     * @param {Number} selection.mouseX - see Selection.mouseX
     * @param {Number} selection.mouseY - see Selection.mouseY
     */
    selectIncludedSquares(selection) {
        AppDispatcher.dispatch({
            type: SquareActionTypes.SELECT_INCLUDED_SQUARES,
            selection
        });
    },
    /** 
     * @param {Move} move 
     */
    moveSelectedSquares(move)
    {
        AppDispatcher.dispatch(
            {
                type:SquareActionTypes.MOVE_SELECTED_SQUARES,
                move
            }
        )
    },
    /**
     * @param {Int} id - index of squares List
     */
    jogSquareX(id) {
        AppDispatcher.dispatch({
            type: SquareActionTypes.JOG_SQUARE_X,
            id: id
        });
    },
    unselectAll()
    {
        AppDispatcher.dispatch({
            type: SquareActionTypes.UNSELECT_ALL
        });
    }
};

export default Actions;
