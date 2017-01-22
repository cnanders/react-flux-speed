import React from 'react';
import Utils from '../utils/Utils';

class SelectionTargetView extends React.PureComponent 
{
	constructor(props) {
		super(props)
		this.classButtons = 'buttons';
		this.x = 0;
		this.y = 0;
		this.height = 500;
		this.width = 1000;
        this.opacity = 0;
        this.fill = '#fff';
        this.onClick = this.onClick.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
       
	}
	
    onClick (event)
    {
        //console.log(event);
        //Utils.logMouseEvent(event);
        //this.props.startSelection(event.clientX, event.clientY);
    }

    onMouseDown (event)
    {
        //console.log(event);
        this.props.startSelection(event.pageX, event.pageY);
    }
    
	
	render()
	{
		return (
			<rect
				x={this.x}
				y={this.y}
				height={this.height}
				width={this.width}
				fill={this.fill}
				fillOpacity={this.opacity}
                onMouseDown={
                    this.onMouseDown
                }
			/>
		);
	}	
}


export default SelectionTargetView;