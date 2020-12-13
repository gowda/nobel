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

const getCategories = (laureate: Laureate): string[] =>
  Object.getOwnPropertyNames(
    laureate.nobelPrizes
      .map((p: any) => p.category)
      .reduce(
        (cacc: any, category: string) => ({
          ...cacc,
          [category]: true,
        }),
        {}
      )
  );

const groupByCategory = (laureates: Laureates): Category[] => {
  const categories = Object.getOwnPropertyNames(laureates)
    .map((id: string) => laureates[id])
    .map((laureate: Laureate) => getCategories(laureate))
    .reduce((acc: string[], cs: string[]) => [...acc, ...cs], [])
    .reduce(
      (acc: any, category: string) => ({
        ...acc,
        [category]: acc[category] ? acc[category] + 1 : 1,
      }),
      {}
    );

  return Object.getOwnPropertyNames(categories).map((label: string) => ({
    label,
    count: categories[label],
    laureates: Object.getOwnPropertyNames(laureates)
      .map((id: string) => laureates[id])
      .filter((laureate: Laureate) => getCategories(laureate).includes(label)),
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
        done: state.done + Object.getOwnPropertyNames(action.payload).length,
        laureates: { ...state.laureates, ...action.payload },
      };
    case DONE_FETCHING: {
      return {
        ...state,
        needFetch: false,
        fetching: false,
        doneFetch: true,
        categories: groupByCategory(state.laureates),
      };
    }
    case TAB_CHANGED:
      return { ...state, tab: action.payload };
    default:
      return state;
  }
};
