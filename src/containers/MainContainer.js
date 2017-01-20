import MainView from '../views/MainView';
import {Container} from 'flux/utils';
import SelectionStore from '../data/SelectionStore';
import SelectionActions from '../actions/SelectionActions';
import React from 'react';

class MainContainer extends React.Component
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
			expandSelection: SelectionActions.expandSelection,
			endSelection: SelectionActions.endSelection,
		};
	}
	render()
	{
		return <MainView {...this.state} />
	}
}

export default Container.create(MainContainer);
