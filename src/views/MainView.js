import React from 'react';
import SquaresContainer from '../containers/SquaresContainer';
import GuiContainer from '../containers/GuiContainer';

class MainView extends React.PureComponent 
{
	constructor(props) {
		super(props)
	}

	render()
	{
		return (
			<div>
				<svg viewBox={"0 0 1000 500"}>
					<SquaresContainer />					
				</svg>	
				<GuiContainer />
			</div>
		)
	}		
}

export default MainView;