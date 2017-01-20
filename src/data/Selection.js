import Immutable from 'immutable'

/**
 * To support selection regions that go from right to left or down to up, can't
 * directly store width or height.  Need to store (x, y) of first click on
 * background and (x, y) of mouse while expanding selection and use these to 
 * calculate the x, y, width, height of the <rect /> that is drawn
 */
const Selection = Immutable.Record({
  show: false,
  // x, y coordinates of first click on background
  pivotX: 0,
  pivotY: 0, 
  // x, y coordinate of mouse while expanding selection region 
  mouseX: 0,
  mouseY: 0
})

export default Selection
