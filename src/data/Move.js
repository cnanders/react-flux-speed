import Immutable from 'immutable'

/**
 * To support moving a selected square
 */
const Move = Immutable.Record({
  moving: false,
  // x, y coordinates of first click on target
  pivotX: 0,
  pivotY: 0, 
  // current x, y coordinates of mouse. Use currenX - pivotX to apply delta x to a square
  currentX: 0,
  currentY: 0
})

export default Move
