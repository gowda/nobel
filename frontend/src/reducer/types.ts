export interface Laureate {
  name: string;
  thumbnailURL: string;
  awards: string[];

  [key: string]: any;
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
