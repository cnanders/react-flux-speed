import GuiView from '../views/GuiView';
import {Container} from 'flux/utils';
import SquareStore from '../data/SquareStore';
import SquareActions from '../actions/SquareActions';
import React from 'react';

class GuiContainer extends React.Component
{
	
	static getStores()
	{
		return [
			SquareStore
		]
	}
	static calculateState()
	{
		return {
			onAddSquareClick: SquareActions.addSquare,
			onAddSquaresClick: SquareActions.addSquares,
			onPrependSquareClick: SquareActions.prependSquare,
		};
	}
	render()
	{
		return <GuiView {...this.state} />
	}
}

export default Container.create(GuiContainer);
