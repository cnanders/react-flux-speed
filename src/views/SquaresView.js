import React from 'react';
import SquareActions from '../actions/SquareActions';
import key from 'keymaster';


function bindKeyboardEvents () {
	key('a', () => {SquareActions.addSquare()});
	key('b', () => {SquareActions.addSquares(50)});
}

class SquaresView extends React.PureComponent 
{
	
	
	
	constructor(props) {
		super(props)
		this.classButtons = 'buttons';
	}
	
	componentWillMount () {
		console.log('SquaresView WillMount()');
		bindKeyboardEvents();
	}

	componentWillUpdate ()
	{
		this.timeStart = performance.now();
	}

	componentDidUpdate ()
	{
		this.timeEnd = performance.now();
		const timeElapsed = Math.round((this.timeEnd - this.timeStart) * 10)/10;
		console.log('SquaresView render elapsed time ' + timeElapsed);
	}
	

	render()
	{
		return (
			<div>
				<div>
					{
					[...this.props.squares.values()].map(square => (
						<Square key={square.id} 
								square={square}
							/>
						))
					}
				</div>
				<div className={this.classButtons}>
					<p>
						<button onClick={ 
									() => {this.props.onAddSquareClick()}
								}
						>
							Add Square (a)
						</button>
					</p>
					<p>
						<button onClick={ 
									() => {this.props.onAddSquaresClick(500)}
								}
						>
							Add Squares (b)
						</button>
					</p>
				</div>
				
			</div>
		)
	}		
}

class Square extends React.PureComponent
{
	render()
	{
		const style = {
			width: 30,
			height: 20,
			fontSize: '8px',
			border: '1px solid #aaa',
			backgroundColor: this.props.square.color,
			float: 'left'
		};
		
		const className = this.props.square.selected ? "selected" : "";

		return (
			<div 	style={style}
					className={className}
			>
				{this.props.square.id}

			</div>
		);
	}
}
/*
function SquaresView(props) {
  return (
    <div>
      {
		  [...props.squares.values()].map(square => (
          	<Square key={square.id} 
		  			square={square}
				/>
        	))
		}
		<p>
			<button onClick={ 
						() => {props.onAddSquareClick()}
					}
			>
				Add Square
			</button>
		</p>
    </div>
  );
}

function Square(props)
{
	const style = {
		width: 30,
		height: 20,
		fontSize: '8px',
		border: '1px solid #aaa',
		backgroundColor: props.square.color,
		float: 'left'
	};
	
	const className = props.square.selected ? "selected" : "";

	return (
		<div 	style={style}
				className={className}
		>
			{props.square.id}

		</div>
	);
}


*/

export default SquaresView;