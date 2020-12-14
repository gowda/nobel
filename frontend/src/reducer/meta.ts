import { RECEIVED_COUNT, RECEIVED_LAUREATES } from './types';

interface State {
  total: number;
  fetched: number;
}

const initialState = {
  total: 0,
  fetched: 0,
};

export default (state: State = initialState, action: any): State => {
  switch (action.type) {
    case RECEIVED_COUNT:
      return { ...state, total: action.payload as number };
    case RECEIVED_LAUREATES:
      return {
        ...state,
        fetched:
          state.fetched +
          Object.getOwnPropertyNames(action.payload.laureates).length,
      };
    default:
      return state;
  }
};
