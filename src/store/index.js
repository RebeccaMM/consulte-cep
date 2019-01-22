import { applyMiddleware, createStore } from 'redux';
import { Reducers } from '../reducers';

import thunk from 'redux-thunk';

export const Store = applyMiddleware(thunk)(createStore)(Reducers);