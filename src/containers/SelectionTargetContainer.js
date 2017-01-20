import SelectionTargetView from '../views/SelectionTargetView';
import {Container} from 'flux/utils';
import SelectionStore from '../data/SelectionStore';
import SelectionActions from '../actions/SelectionActions';
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
		};
	}
	render()
	{
		return <SelectionTargetView {...this.state} />
	}
}

export default Container.create(SelectionTargetContainer);
