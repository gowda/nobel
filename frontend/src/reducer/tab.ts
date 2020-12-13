import { TAB_CHANGED } from './types';

type State = string | null;

const initialState: State = null;

export default (state: State = initialState, action: any): State => {
  switch (action.type) {
    case TAB_CHANGED:
      return action.payload;
    default:
      return state;
  }
};
