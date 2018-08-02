import { combineReducers } from 'redux';

import app from './app';
import food from './food';

const reducers = combineReducers({
  app,
  food,
});

export default reducers;
