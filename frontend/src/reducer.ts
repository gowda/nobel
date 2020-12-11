export interface State {
  needFetch: boolean;
  fetching: boolean;
  doneFetch: boolean;
  total: number;
  laureates: any[];
  tab?: string;
}

export const initialState: State = {
  needFetch: true,
  fetching: false,
  doneFetch: false,
  total: 0,
  laureates: [],
};

export const FETCHING_LAUREATES = 'FETCHING_LAUREATES';
export const RECEIVED_COUNT = 'RECEIVED_COUNT';
export const RECEIVED_LAUREATES = 'RECEIVED_LAUREATES';
export const DONE_FETCHING = 'DONE_FETCHING';
export const TAB_CHANGED = 'TAB_CHANGED';

export default (state: State = initialState, action: any): State => {
  switch (action.type) {
    case FETCHING_LAUREATES:
      return { ...state, needFetch: false, fetching: true };
    case RECEIVED_COUNT:
      return { ...state, total: action.payload };
    case RECEIVED_LAUREATES:
      return { ...state, laureates: [...state.laureates, ...action.payload] };
    case DONE_FETCHING:
      return { ...state, needFetch: false, fetching: false, doneFetch: true };
    case TAB_CHANGED:
      return { ...state, tab: action.payload };
    default:
      return state;
  }
};
