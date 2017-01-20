import React from 'react';
import SquareActions from '../actions/SquareActions';
import key from 'keymaster';
import Utils from '../utils/Utils';
//import SelecionView from './SelectionView';

function bindKeyboardEvents () {
	key('a', () => {SquareActions.addSquare()});
	key('b', () => {SquareActions.addSquares(50)});
	key('c', () => {SquareActions.prependSquare()});
}

class GuiView extends React.PureComponent 
{
	
	constructor(props) {
		super(props)
		bindKeyboardEvents();
		this.classButtons = 'buttons';
	}

	render()
	{

		return (
			<div className={this.classButtons}>
				<p>
					<button onClick={ 
								() => {this.props.onAddSquareClick()}
							}
					>
						Add Square (a)
					</button>
				
					<button onClick={ 
								() => {this.props.onAddSquaresClick(500)}
							}
					>
						Add Squares (b)
					</button>
					<button onClick={ 
								() => {this.props.onPrependSquareClick()}
							}
					>
						Prepend Square (c)
					</button>
				</p>
			</div>
		)
	}		
}


export default GuiView;