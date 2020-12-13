import { combineReducers } from 'redux';
import categories from './categories';
import fetching from './fetching';
import meta from './meta';
import laureates from './laureates';
import tab from './tab';

const reducer = combineReducers({
  fetching,
  meta,
  categories,
  laureates,
  tab,
});

export type State = ReturnType<typeof reducer>;
export default reducer;
