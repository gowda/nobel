import axios from 'axios';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { State } from '../reducer';
import { CATEGORIES_RECEIVED } from '../reducer/action-types';

import { Category } from '../reducer/types';

import Component from '../overview';

const API_ENDPOINT = 'http://localhost:4242/api/v1';

const mapState = ({ categories }: State) => ({ categories });

const mapDispatch = (dispatch: Dispatch) => ({
  fetch: () =>
    axios
      .get<Category[]>(`${API_ENDPOINT}/categories`, {
        headers: { Accept: 'application/json' },
      })
      .then((response) => response.data)
      .then((data) => dispatch({ type: CATEGORIES_RECEIVED, payload: data })),
});

export default connect(mapState, mapDispatch)(Component);
