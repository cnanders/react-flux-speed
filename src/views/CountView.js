import React from 'react';
import Utils from '../utils/Utils';

class CountView extends React.PureComponent 
{
	constructor(props) {
		super(props)
		this.classButtons = 'buttons';
		this.x = 0;
		this.y = 30;
		this.fontFamily = 'Helvetica';
		this.fontSize = '30';

       
	}
	
    
    
	
	render()
	{
		return (
			<text
				x={this.x}
				y={this.y}
				fontFamily={this.fontFamily}
				fontSize={this.fontSize}
				
			>
				{this.props.squares.size}
			</text>
		);
	}	
}


export default CountView;