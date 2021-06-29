import { AnyAction } from 'redux';
import { CATEGORIES_RECEIVED } from '../../action-types';

type State = boolean;

const initialState: State = false;

export default (state: State = initialState, action: AnyAction): State => {
  switch (action.type) {
    case CATEGORIES_RECEIVED:
      return true;
    default:
      return state;
  }
};
