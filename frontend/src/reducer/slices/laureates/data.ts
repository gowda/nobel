import { AnyAction } from 'redux';
import { LAUREATES_RECEIVED, NAVIGATED } from '../../action-types';
import { Laureate } from '../../../types';

type State = Laureate[];

const initialState: State = [];

export default (state: State = initialState, action: AnyAction): State => {
  switch (action.type) {
    case LAUREATES_RECEIVED:
      return action.payload;
    case NAVIGATED:
      return initialState;
    default:
      return state;
  }
};
