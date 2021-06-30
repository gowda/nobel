import { Laureate } from '../../types';
import {
  LAUREATES_FETCHING,
  LAUREATES_FETCH_ERROR,
  LAUREATES_RECEIVED,
} from '../action-types';

export const fetchingLaureates = () => ({ type: LAUREATES_FETCHING });

export const receivedLaureates = (data: Laureate[]) => ({
  type: LAUREATES_RECEIVED,
  payload: data,
});

export const fetchLaureatesError = () => ({
  type: LAUREATES_FETCH_ERROR,
  payload: 'Oops! Something went wrong. Failed to fetch laureates',
});
