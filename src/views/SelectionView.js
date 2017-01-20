import React from 'react';
import SelectionActions from '../actions/SelectionActions';
import key from 'keymaster';
import Utils from '../utils/Utils';


class SelectionsView extends React.PureComponent 
{
	constructor(props) {
		super(props)
		this.classButtons = 'buttons';
        this.opacity = 0.5;
        this.fill = '#ccc';
        this.stroke = '#444';
        this.strokeWidth = 1;
	}
	
	componentWillMount () {
		console.log('SelectionsView WillMount()');
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
		console.log('SelectionsView render elapsed time ' + timeElapsed);
	}
	

	render()
	{
		
        if (!this.props.selection.show)
        {
            return;
        }

		return (
			<rect
				x={this.props.selection.x}
				y={this.props.selection.y}
				height={this.props.selection.height}
				width={this.props.selection.width}
				fill={this.fill}
				fillOpacity={this.opacity}
				stroke={this.stroke}
				strokeWidth={this.strokeWidth}
				strokeOpacity={this.opacity}
				onClick={
                    // Empty arrow function for now
					() => {}
				}
			/>
		);
	}	
}


export default SelectionsView;