import { AnyAction } from 'redux';
import {
  LAUREATES_FETCHING,
  LAUREATES_FETCH_ERROR,
  LAUREATES_RECEIVED,
  NAVIGATED,
} from '../../action-types';

type State = string | null;

const initialState: State = null;

export default (state: State = initialState, action: AnyAction): State => {
  switch (action.type) {
    case LAUREATES_FETCH_ERROR:
      return action.payload;
    case LAUREATES_FETCHING:
    case LAUREATES_RECEIVED:
    case NAVIGATED:
      return initialState;
    default:
      return state;
  }
};
