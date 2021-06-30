import { AnyAction } from 'redux';
import {
  LAUREATES_FETCHING,
  LAUREATES_FETCH_ERROR,
  LAUREATES_RECEIVED,
  NAVIGATED,
} from '../../action-types';

type State = boolean;

const initialState: State = false;

export default (state: State = initialState, action: AnyAction): State => {
  switch (action.type) {
    case LAUREATES_FETCHING:
      return true;
    case LAUREATES_RECEIVED:
    case LAUREATES_FETCH_ERROR:
    case NAVIGATED:
      return initialState;
    default:
      return state;
  }
};
