export type Laureate = any;

interface Laureates {
  [id: string]: Laureate;
}

export interface State {
  needFetch: boolean;
  fetching: boolean;
  doneFetch: boolean;
  total: number;
  done: number;
  laureates: Laureates;
  categories: { [name: string]: Laureate[] };
  tab?: string;
}

export const initialState: State = {
  needFetch: true,
  fetching: false,
  doneFetch: false,
  total: 0,
  done: 0,
  categories: {},
  laureates: {},
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
      return {
        ...state,
        done: state.done + action.payload.length,
        laureates: action.payload.reduce(
          (acc: Laureates, laureate: Laureate) => ({
            ...acc,
            [laureate.id]: laureate,
          }),
          { ...state.laureates }
        ),
      };
    case DONE_FETCHING: {
      const categories = {
        ...Object.getOwnPropertyNames(state.laureates)
          .map((id: string) => state.laureates[id])
          .map((laureate: Laureate) =>
            laureate.nobelPrizes.map((prize: any) => prize.category)
          )
          .reduce((acc: string[], cs: string[]) => [...acc, ...cs], [])
          .reduce(
            (acc: any, category: string) => ({
              ...acc,
              [category]: acc[category] ? acc[category] + 1 : 1,
            }),
            {}
          ),
      };

      return {
        ...state,
        needFetch: false,
        fetching: false,
        doneFetch: true,
        categories: Object.getOwnPropertyNames(state.laureates).reduce(
          (acc: any, id: string) => {
            const laureate = state.laureates[id];
            const prizesCategories: string[] = Object.getOwnPropertyNames(
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

            prizesCategories.forEach((category: string) => {
              acc[category] = [...acc[category], laureate];
            });

            return acc;
          },
          Object.getOwnPropertyNames(categories).reduce(
            (acc: any, category: string) => ({
              ...acc,
              [category]: [],
            }),
            {}
          )
        ),
      };
    }
    case TAB_CHANGED:
      return { ...state, tab: action.payload };
    default:
      return state;
  }
};
