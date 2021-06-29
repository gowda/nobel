import { AnyAction } from 'redux';
import { CATEGORIES_RECEIVED } from './action-types';
import { Category } from './types';

type State = Category[];

const initialState: State = [];

export default (state: State = initialState, action: AnyAction): State => {
  switch (action.type) {
    case CATEGORIES_RECEIVED:
      return action.payload;
    default:
      return state;
  }
};
