import { Laureates, RECEIVED_LAUREATES } from './types';

type State = Laureates;

const initialState: State = {};

export default (state: State = initialState, action: any): State => {
  switch (action.type) {
    case RECEIVED_LAUREATES:
      return {
        ...state,
        ...action.payload.laureates,
      };
    default:
      return state;
  }
};
