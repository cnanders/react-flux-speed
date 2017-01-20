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

        const coords = Utils.selectionToCoords(this.props.selection);
        
		return (
			<rect
				x={coords.x}
				y={coords.y}
				height={coords.height}
				width={coords.width}
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