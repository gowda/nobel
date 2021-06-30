import { combineReducers } from 'redux';
import categories from './slices/categories';
import laureates from './slices/laureates';

const reducer = combineReducers({
  categories,
  laureates,
});

export type State = ReturnType<typeof reducer>;
export default reducer;
