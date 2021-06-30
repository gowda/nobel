export interface Award {
  year: string;
  motivation: string;
  category: {
    name: string;
    short: string;
  };
}

export interface Laureate {
  id: string;
  name: string;
  thumbnailURL: string;
  awards: Award[];
  person: boolean;
  org: boolean;
}

export interface Location {
  name: string;
  city: string;
  country: string;
  continent: string;
}

export interface Person extends Laureate {
  firstName: string;
  lastName: string;
  gender: string;
  birth: {
    dateStr: string;
    date?: Date;
    place: Location;
  };
  death?: {
    dateStr: string;
    date?: Date;
    place: Location;
  };
}

export interface Org extends Laureate {
  nativeName: string;
  acronym: string;
  founded: {
    dateStr: string;
    date?: Date;
    place: Location;
  };
}

export interface Laureates {
  [id: string]: Laureate;
}

export interface Category {
  id: string;
  name: string;
  short: string;
  label: string;
  count: number;
  prizeCount: number;
  laureateCount: number;
  laureates: Laureate[];
}

export const FETCHING_LAUREATES = 'FETCHING_LAUREATES';
export const RECEIVED_COUNT = 'RECEIVED_COUNT';
export const RECEIVED_LAUREATES = 'RECEIVED_LAUREATES';
export const DONE_FETCHING = 'DONE_FETCHING';
export const TAB_CHANGED = 'TAB_CHANGED';
