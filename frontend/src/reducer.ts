export interface Laureate {
  name: string;
  awards: string[];

  [key: string]: any;
}

interface Laureates {
  [id: string]: Laureate;
}

export interface Category {
  label: string;
  count: number;
  laureates: Laureate[];
}

export interface State {
  needFetch: boolean;
  fetching: boolean;
  doneFetch: boolean;
  total: number;
  done: number;
  laureates: Laureates;
  categories: Category[];
  tab?: string;
}

export const initialState: State = {
  needFetch: true,
  fetching: false,
  doneFetch: false,
  total: 0,
  done: 0,
  categories: [],
  laureates: {},
};

export const FETCHING_LAUREATES = 'FETCHING_LAUREATES';
export const RECEIVED_COUNT = 'RECEIVED_COUNT';
export const RECEIVED_LAUREATES = 'RECEIVED_LAUREATES';
export const DONE_FETCHING = 'DONE_FETCHING';
export const TAB_CHANGED = 'TAB_CHANGED';

const groupBy = (arr: any[], func: Function) =>
  arr.reduce(
    (acc: any, element: any) => ({
      ...acc,
      [func(element)]: [...(acc[func(element)] || []), element],
    }),
    {}
  );

const merge = (arr1: any[], arr2: any[]) => {
  const denormalized = groupBy(
    [...arr1, ...arr2],
    (element: any) => element.label
  );
  const keys = Object.getOwnPropertyNames(denormalized);

  return keys.map((key: string) => ({
    label: key,
    count: (denormalized[key] as any[]).reduce(
      (acc: number, { count }) => acc + count,
      0
    ),
    laureates: (denormalized[key] as any[]).reduce(
      (acc: any[], { laureates }) => [...acc, ...laureates],
      []
    ),
  }));
};

export default (state: State = initialState, action: any): State => {
  switch (action.type) {
    case FETCHING_LAUREATES:
      return { ...state, needFetch: false, fetching: true };
    case RECEIVED_COUNT:
      return { ...state, total: action.payload };
    case RECEIVED_LAUREATES:
      return {
        ...state,
        done:
          state.done +
          Object.getOwnPropertyNames(action.payload.laureates).length,
        laureates: { ...state.laureates, ...action.payload.laureates },
        categories: merge(state.categories, action.payload.categories),
      };
    case DONE_FETCHING: {
      return {
        ...state,
        needFetch: false,
        fetching: false,
        doneFetch: true,
      };
    }
    case TAB_CHANGED:
      return { ...state, tab: action.payload };
    default:
      return state;
  }
};
