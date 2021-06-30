import axios from 'axios';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { State } from '../reducer';
import {
  CATEGORIES_FETCHING,
  CATEGORIES_FETCH_ERROR,
  CATEGORIES_RECEIVED,
} from '../reducer/action-types';

import { Category } from '../types';

import Component from '../components/overview';

const API_ENDPOINT = 'http://localhost:4242/api/v1';

const mapState = ({ categories }: State) => ({ ...categories });

const mapDispatch = (dispatch: Dispatch) => ({
  fetch: () => {
    dispatch({ type: CATEGORIES_FETCHING });

    axios
      .get<Category[]>(`${API_ENDPOINT}/categories`, {
        headers: { Accept: 'application/json' },
      })
      .then((response) => response.data)
      .then((data) => dispatch({ type: CATEGORIES_RECEIVED, payload: data }))
      .catch(() =>
        dispatch({
          type: CATEGORIES_FETCH_ERROR,
          payload: 'Oops! Something went wrong. Failed to fetch categories',
        })
      );
  },
});

export default connect(mapState, mapDispatch)(Component);
