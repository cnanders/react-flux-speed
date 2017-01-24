import SquaresView from '../views/SquaresView';
import {Container} from 'flux/utils';
import SquareStore from '../data/SquareStore';
import SquareActions from '../actions/SquareActions';
import MoveActions from '../actions/MoveActions';
import React from 'react';
/*
function getStores() {
  return [
    SquareStore,
  ];
}

function getState() {
  return {
    squares: SquareStore.getState(),
	onAddSquareClick: SquareActions.addSquare,
	//onDeleteTodo: TodoActions.deleteTodo,
    //onToggleTodo: TodoActions.toggleTodo,
  };
}

// Need to use createFunctional since AppView is not a Component, it is a 
// stateless functional component
export default Container.createFunctional(SquaresView, getStores, getState);

*/

class SquaresContainer extends React.Component
{
	/*
	constructor()
	{
		key('a', SquareActions.addSquare)
	}
	*/
	
	static getStores()
	{
		return [
			SquareStore
		]
	}
	static calculateState()
	{
		return {
			squares: SquareStore.getState(),
			onAddSquareClick: SquareActions.addSquare,
			onAddSquaresClick: SquareActions.addSquares,
			onPrependSquareClick: SquareActions.prependSquare,
			onSquareClick: SquareActions.selectSquare,
			startMove: MoveActions.startMove,
			blah: SquareActions.blah,
			
			//onDeleteTodo: TodoActions.deleteTodo,
			//onToggleTodo: TodoActions.toggleTodo,
		};
	}
	render()
	{
		return <SquaresView {...this.state} />
	}
}

export default Container.create(SquaresContainer);
