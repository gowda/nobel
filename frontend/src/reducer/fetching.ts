import { DONE_FETCHING, FETCHING_LAUREATES } from './types';

type State = {
  required: boolean;
  happening: boolean;
  complete: boolean;
};

const initialState = {
  required: true,
  happening: false,
  complete: false,
};

export default (state: State = initialState, action: any): State => {
  switch (action.type) {
    case FETCHING_LAUREATES:
      return { ...state, required: false, happening: true };
    case DONE_FETCHING:
      return { ...state, happening: false, complete: true };
    default:
      return state;
  }
};
