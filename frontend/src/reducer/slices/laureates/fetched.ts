import { AnyAction } from 'redux';
import { LAUREATES_RECEIVED, NAVIGATED } from '../../action-types';

type State = boolean;

const initialState: State = false;

export default (state: State = initialState, action: AnyAction): State => {
  switch (action.type) {
    case LAUREATES_RECEIVED:
      return true;
    case NAVIGATED:
      return initialState;
    default:
      return state;
  }
};
