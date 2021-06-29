import { combineReducers } from 'redux';
import categories from './slices/categories';
import fetching from './fetching';
import meta from './meta';
import laureates from './laureates';

const reducer = combineReducers({
  fetching,
  meta,
  categories,
  laureates,
});

export type State = ReturnType<typeof reducer>;
export default reducer;
