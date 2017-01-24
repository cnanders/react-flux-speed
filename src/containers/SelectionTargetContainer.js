import SelectionTargetView from '../views/SelectionTargetView';
import {Container} from 'flux/utils';
import SelectionStore from '../data/SelectionStore';
import SelectionActions from '../actions/SelectionActions';
import SquareActions from '../actions/SquareActions';
import React from 'react';

class SelectionTargetContainer extends React.Component
{

	static getStores()
	{
		return [
			SelectionStore
		]
	}
	static calculateState()
	{
		return {
			selection: SelectionStore.getState(),
			startSelection: SelectionActions.startSelection,
			unselectAll: SquareActions.unselectAll
		};
	}
	render()
	{
		return <SelectionTargetView {...this.state} />
	}
}

export default Container.create(SelectionTargetContainer);
