import axios from 'axios';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { State } from '../reducer';
import Component from '../components/laureate-list';
import {
  LAUREATES_FETCHING,
  LAUREATES_FETCH_ERROR,
  LAUREATES_RECEIVED,
} from '../reducer/action-types';
import { Laureate } from '../types';

const API_ENDPOINT = 'http://localhost:4242/api/v1';

interface OwnProps {
  category: string;
}

const mapState = ({ laureates }: State) => ({
  ...laureates,
});

const mapDispatch = (dispatch: Dispatch, { category }: OwnProps) => ({
  fetch: () => {
    dispatch({ type: LAUREATES_FETCHING });

    axios
      .get<Laureate[]>(`${API_ENDPOINT}/laureates`, {
        params: { category },
        headers: { Accept: 'application/json' },
      })
      .then((response) => response.data)
      .then((data) => dispatch({ type: LAUREATES_RECEIVED, payload: data }))
      .catch(() =>
        dispatch({
          type: LAUREATES_FETCH_ERROR,
          payload: 'Oops! Something went wrong. Failed to fetch laureates',
        })
      );
  },
});

export default connect(mapState, mapDispatch)(Component);
