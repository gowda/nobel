import { combineReducers } from 'redux';

import data from './data';
import error from './error';
import fetched from './fetched';
import fetching from './fetching';

export default combineReducers({
  data,
  error,
  fetched,
  fetching,
});
