/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import SquaresContainer from './containers/SquaresContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import Perf from 'react-addons-perf';

// Expose the React Performance Tools on the “window” object
window.Perf = Perf;

/*
// Todo

ReactDOM.render(<AppContainer />, document.getElementById('todoapp'));

// Fake data
import TodoActions from './actions/TodoActions';
TodoActions.addTodo('My first task');
TodoActions.addTodo('Another task');
TodoActions.addTodo('Finish this tutorial');

*/

// Squares

ReactDOM.render(<SquaresContainer />, document.getElementById('root'));
import SquareActions from './actions/SquareActions';

SquareActions.addSquare();
SquareActions.addSquares(100);
/*
var n;
var length = 1000;
for (n = 0; n < length; n++)
{
	SquareActions.addSquare();
}
*/
