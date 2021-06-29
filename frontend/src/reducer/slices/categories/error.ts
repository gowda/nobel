import { AnyAction } from 'redux';
import {
  CATEGORIES_FETCHING,
  CATEGORIES_FETCH_ERROR,
  CATEGORIES_RECEIVED,
} from '../../action-types';

type State = string | null;

const initialState: State = null;

export default (state: State = initialState, action: AnyAction): State => {
  switch (action.type) {
    case CATEGORIES_FETCH_ERROR:
      return action.payload;
    case CATEGORIES_RECEIVED:
    case CATEGORIES_FETCHING:
      return null;
    default:
      return state;
  }
};
