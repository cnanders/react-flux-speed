import React from 'react';
//import SelecionView from './SelectionView';

class SquaresView extends React.PureComponent 
{
	constructor(props) {
		super(props)
		this.classButtons = 'buttons';
	}
	
	componentWillMount () {
		console.log('Squares WillMount()');
	}

	componentWillUpdate ()
	{
		this.timeStart = performance.now();
	}

	componentDidUpdate ()
	{
		this.timeEnd = performance.now();
		const timeElapsed = Math.round((this.timeEnd - this.timeStart) * 10)/10;
		console.log('Squares render elapsed time ' + timeElapsed);
	}

	render()
	{

		const deltaX = this.props.move.currentX - this.props.move.pivotX;
		const deltaY = this.props.move.currentY - this.props.move.pivotY;
		return (
			<g>
			{
			this.props.squares.map(
				(square, i) => {
					
					if (square.selected)
					{
						var translate = "translate(" + deltaX + "," + deltaY + ")";
					}
					else
					{
						var translate = "";
					}
					return (
						<g
							transform={translate}
						>
						<Square key={square.id} 
								square={square}
								move={this.props.move}
								index={i}
								onSquareClick={this.props.onSquareClick}
								startMove={this.props.startMove}
						/>	
						</g>	
					)
				}
				)
			}
			</g>
		)
	}		
}

class Square extends React.PureComponent
{
	
	constructor(props) {
		super(props)
       	this.onClick = this.onClick.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
	}

	onMouseDown (event)
    {
        this.props.startMove(event.pageX, event.pageY);
    }

	onClick (event)
	{
		//this.props.onSquareClick(this.props.index)
	}
	
	render()
	{
		
		const opacity = this.props.square.selected ? 1 : 0.4;
		//const strokeWidth = 6;
		//const stroke = this.props.square.selected ? '#444' : this.props.square.color;

		const stroke = '#444';
		const strokeWidth = this.props.square.selected ? 1 : 0;
		return (
			<rect
				x={this.props.square.x}
				y={this.props.square.y}
				height={this.props.square.height}
				width={this.props.square.width}
				fill={this.props.square.color}
				fillOpacity={opacity}
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeOpacity={opacity}
				onClick={
					this.onClick
				}
				onMouseDown={
					this.onMouseDown
				}
				
			/>
		);
	}
}


export default SquaresView;