import SelectionView from '../views/SelectionView';
import {Container} from 'flux/utils';
import SelectionStore from '../data/SelectionStore';
import SelectionActions from '../actions/SelectionActions';
import React from 'react';


class SelectionContainer extends React.Component
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
			onSelectionStart: SelectionActions.
			//onDeleteTodo: TodoActions.deleteTodo,
			//onToggleTodo: TodoActions.toggleTodo,
		};
	}
	render()
	{
		return <SelectionView {...this.state} />
	}
}

export default Container.create(SelectionContainer);
