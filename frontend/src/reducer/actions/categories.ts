import { Category } from '../../types';
import {
  CATEGORIES_FETCHING,
  CATEGORIES_FETCH_ERROR,
  CATEGORIES_RECEIVED,
} from '../action-types';

export const fetchingCategories = () => ({ type: CATEGORIES_FETCHING });

export const receivedCategories = (data: Category[]) => ({
  type: CATEGORIES_RECEIVED,
  payload: data,
});

export const fetchCategoriesError = () => ({
  type: CATEGORIES_FETCH_ERROR,
  payload: 'Oops! Something went wrong. Failed to fetch categories',
});
