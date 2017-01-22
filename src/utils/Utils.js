class Utils {

  static getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  static logMouseEvent(event) {
    console.log('screen: (' + event.screenX + ',' + event.screenY + ')')
    console.log('client: (' + event.clientX + ',' + event.clientY + ')')
    console.log('page: (' + event.pageX + ',' + event.pageY + ')')
  }

  /**
   * Convert pivotX, pivotY, mouseX, mouseY from a selection into drawing 
   * coordinates, i.e., x, y, width, height
   * @param {Object | Selection} s
   * @param {Number} s.pivotX - see Selection.pivotX
   * @param {Number} s.pivotY - see Selection.pivotY
   * @param {Number} s.mouseX - see Selection.mouseX
   * @param {Number} s.mouseY - see Selection.mouseY
   * @return {Object} coords
   * @return {Number} coords.x
   * @return {Number} coords.y
   * @return {Number} coords.width
   * @return {Number} coords.height
   */
  static selectionToCoords(s) 
  {
      // Takes between 5 us and 10 us on rMBP.  Pretty sure it is optimized

      //var timeStart = performance.now();
      var x, y, width, height;

      /*
      var out;
      out = {
        x: s.pivotX <= s.mouseX ? s.pivotX : s.mouseX,
        width: s.pivotX <= s.mouseX ? s.mouseX - s.pivotX : s.pivotX - s.mouseX,
        y: s.pivotY <= s.mouseY ? s.pivotY : s.mouseY,
        height: s.pivotY <= s.mouseY ? s.mouseY - s.pivotY : s.pivotY - s.mouseY
      }

      var timeEnd = performance.now();
      var timeElapsed = timeEnd - timeStart;
      console.log('selectionToCoords elapsed time: ' + timeElapsed);


      return out;
      */
      
     

      if (s.pivotX <= s.mouseX)
      {
          x = s.pivotX;
          width = s.mouseX - s.pivotX;
      }
      else
      {
          x = s.mouseX;
          width = s.pivotX - s.mouseX;
      }

      if (s.pivotY <= s.mouseY)
      {
          y = s.pivotY;
          height = s.mouseY - s.pivotY;
      }
      else
      {
          y = s.mouseY;
          height = s.pivotY - s.mouseY;
      } 

      // var timeEnd = performance.now();
      // var timeElapsed = timeEnd - timeStart;
      // console.log('selectionToCoords elapsed time: ' + timeElapsed + ' ms');

      return {
        x,
        y,
        width,
        height
      } 
      
  }

  /**
   * @param {Square} square
   * @param {Selection | Object} selection 
   * @return {Boolean}
   */
  static squareIsInSelection(square, selection)
  {
    
    var coords = Utils.selectionToCoords(selection);
    
    //var timeStart = performance.now();

    var leftEdgeInSelection; 
    var rightEdgeInSelection; 
    var topEdgeInSelection; 
    var bottomEdgeInSelection;

    var xIn;
    var yIn;

    leftEdgeInSelection = square.x >= coords.x & 
                          square.x <= coords.x + coords.width;
    rightEdgeInSelection =  (square.x + square.width) >= coords.x &
                            (square.x + square.width) <= coords.x + coords.width;
    xIn = leftEdgeInSelection | rightEdgeInSelection;

    topEdgeInSelection =  square.y >= coords.y &
                          square.y <= coords.y + coords.height;
    bottomEdgeInSelection = (square.y + square.height) >= coords.y & 
                            (square.y + square.height) <= coords.y + coords.height;

    yIn = topEdgeInSelection | bottomEdgeInSelection;
    
    // var timeEnd = performance.now();
    // var timeElapsed = timeEnd - timeStart;
    // console.log('squareIsInSelection elapsed time: ' + timeElapsed);
    return xIn & yIn;
  }

}

export default Utils
