import MainView from '../views/MainView';
import {Container} from 'flux/utils';
import SelectionStore from '../data/SelectionStore';
import SelectionActions from '../actions/SelectionActions';
import SquareActions from '../actions/SquareActions';
import MoveActions from '../actions/MoveActions';
import MoveStore from '../data/MoveStore';
import React from 'react';

class MainContainer extends React.Component
{

	static getStores()
	{
		return [
			SelectionStore,
			MoveStore // Subcribe to MoveStore events
		]
	}
	static calculateState()
	{
		return {
			// Selection
			selection: SelectionStore.getState(),
			expandSelection: SelectionActions.expandSelection,
			endSelection: SelectionActions.endSelection,
			selectIncludedSquares: SquareActions.selectIncludedSquares,
			// Move
			move: MoveStore.getState(),
			continueMove: MoveActions.continueMove,
			endMove: MoveActions.endMove,
			moveSelectedSquares: SquareActions.moveSelectedSquares,
		};
	}
	render()
	{
		return <MainView {...this.state} />
	}
}

export default Container.create(MainContainer);
