import React from 'react';
import Utils from '../utils/Utils';

class SelectionView extends React.PureComponent 
{
	constructor(props) {
		super(props)
        this.opacity = 0.5;
        this.fill = '#ccc';
        this.stroke = '#444';
        this.strokeWidth = 1;
	}
	
	render()
	{
		
        if (!this.props.selection.show)
        {
            return null;
        }

        const pivotX = this.props.selection.pivotX;
        const pivotY = this.props.selection.pivotY;
        const mouseX = this.props.selection.mouseX;
        const mouseY = this.props.selection.mouseY;

        var x;
        var y;
        var width;
        var height;

        if (pivotX <= mouseX)
        {
            x = pivotX;
            width = mouseX - pivotX;
        }
        else
        {
            x = mouseX;
            width = pivotX - mouseX;
        }

        if (pivotY <= mouseY)
        {
            y = pivotY;
            height = mouseY - pivotY;
        }
        else
        {
            y = mouseY;
            height = pivotY - mouseY;
        }
        
		return (
			<rect
				x={x}
				y={y}
				height={height}
				width={width}
				fill={this.fill}
				fillOpacity={this.opacity}
				stroke={this.stroke}
				strokeWidth={this.strokeWidth}
				strokeOpacity={this.opacity}
			/>
		);
       
        
	}	
}


export default SelectionView;