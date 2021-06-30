import axios from 'axios';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { State } from '../reducer';

import { Category } from '../types';

import Component from '../components/overview';
import {
  fetchCategoriesError,
  fetchingCategories,
  receivedCategories,
} from '../reducer/actions';

const API_ENDPOINT = 'http://localhost:4242/api/v1';

const mapState = ({ categories }: State) => ({ ...categories });

const mapDispatch = (dispatch: Dispatch) => ({
  fetch: () => {
    dispatch(fetchingCategories());

    axios
      .get<Category[]>(`${API_ENDPOINT}/categories`, {
        headers: { Accept: 'application/json' },
      })
      .then((response) => response.data)
      .then((data) => dispatch(receivedCategories(data)))
      .catch(() => dispatch(fetchCategoriesError()));
  },
});

export default connect(mapState, mapDispatch)(Component);
