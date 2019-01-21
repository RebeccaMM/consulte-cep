import { applyMiddleware, createStore } from 'redux';
import { Reducers } from '../reducers';

import promise from 'redux-promise';

export const Store = applyMiddleware(promise)(createStore)(Reducers);