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

const getFullName = (laureate: any) =>
  laureate.knownName
    ? laureate.knownName
    : `${laureate.givenName} ${laureate.familyName}`;
const getOrgName = (laureate: any) => laureate.orgName;
const getName = (laureate: any) =>
  getOrgName(laureate) || getFullName(laureate);

const getFoundedCountry = (laureate: any) =>
  laureate.founded && laureate.founded.place
    ? laureate.founded.place.countryNow
    : undefined;
const getBirthCountry = (laureate: any) =>
  laureate.birth && laureate.birth.place
    ? laureate.birth.place.countryNow
    : undefined;
const getCountry = (laureate: any) =>
  getFoundedCountry(laureate) || getBirthCountry(laureate);

const getAwards = (laureate: any) =>
  laureate.nobelPrizes.map((p: any) => p.awardYear).join(', ');

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
            [laureate.id]: {
              ...laureate,
              name: getName(laureate),
              country: getCountry(laureate),
              awards: getAwards(laureate),
            },
          }),
          { ...state.laureates }
        ),
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
