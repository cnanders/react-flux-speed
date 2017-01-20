const utils = {
  getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  },
  logMouseEvent(event) {
    console.log('screen: (' + event.screenX + ',' + event.screenY + ')')
    console.log('client: (' + event.clientX + ',' + event.clientY + ')')
    console.log('page: (' + event.pageX + ',' + event.pageY + ')')
  },
}

export default utils
