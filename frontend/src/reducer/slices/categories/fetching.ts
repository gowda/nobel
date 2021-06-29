import { AnyAction } from 'redux';
import {
  CATEGORIES_FETCHING,
  CATEGORIES_FETCH_ERROR,
  CATEGORIES_RECEIVED,
} from '../../action-types';

type State = boolean;

const initialState: State = false;

export default (state: State = initialState, action: AnyAction): State => {
  switch (action.type) {
    case CATEGORIES_FETCHING:
      return true;
    case CATEGORIES_RECEIVED:
      return false;
    case CATEGORIES_FETCH_ERROR:
      return false;
    default:
      return state;
  }
};
