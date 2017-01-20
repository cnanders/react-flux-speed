import Immutable from 'immutable'

const Selection = Immutable.Record({
  id: '',
  show: false,
  color: '#ccc',
  x: 0,
  y: 0,
  height: 20,
  width: 20
})

export default Selection
