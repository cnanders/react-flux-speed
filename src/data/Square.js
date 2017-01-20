import Immutable from 'immutable';

const Square = Immutable.Record({
  id: '',
  selected: false,
  color: '#ccc',
  x: 0,
  y: 0,
  height: 10,
  width: 10
});

export default Square;