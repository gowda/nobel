import merge from '../utils/merge';
import { Category, RECEIVED_LAUREATES } from './types';

type State = Category[];

const initialState: State = [];

export default (state: State = initialState, action: any): State => {
  switch (action.type) {
    case RECEIVED_LAUREATES:
      return merge(state, action.payload.categories);
    default:
      return state;
  }
};
