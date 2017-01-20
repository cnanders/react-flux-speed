import React from 'react';
import SquaresContainer from '../containers/SquaresContainer';
import GuiContainer from '../containers/GuiContainer';
import SelectionContainer from '../containers/SelectionContainer';
import SelectionTargetContainer from '../containers/SelectionTargetContainer';


/**
 * SelectionTargetView handles mouseDown
 * This is responsible for mouseMove and mouseUp (needs to be at highest level)
 */
class MainView extends React.PureComponent 
{

	constructor(props) {
		super(props);
		this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
	}
	
	onMouseUp (event)
    {
        if (this.props.selection.show) 
		{
			this.props.endSelection();
		}
    }
    onMouseMove (event)
    {
        if (this.props.selection.show)
        {
            this.props.expandSelection(event.clientX, event.clientY);
        }
    }

	// viewBox={"0 0 1000 500"}
	render()
	{
		return (
			<div>
				<svg 	height={"500"} 
						width={"1000"}
						onMouseUp={
							this.onMouseUp
						}
						onMouseMove={
							this.onMouseMove
						}
					>
					<SelectionTargetContainer />
					<SquaresContainer />
					<SelectionContainer/>					
				</svg>	
				<GuiContainer />
			</div>
		)
	}		
}

export default MainView;