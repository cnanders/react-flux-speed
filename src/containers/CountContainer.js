import CountView from '../views/CountView';
import {Container} from 'flux/utils';
import SquareStore from '../data/SquareStore';
import React from 'react';

class CountContainer extends React.Component
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
			squares: SquareStore.getState(),
		};
	}
	render()
	{
		return <CountView {...this.state} />
	}
}

export default Container.create(CountContainer);
