import axios from 'axios';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { State } from '../reducer';
import Component from '../components/laureate-list';
import { Laureate } from '../types';
import {
  fetchingLaureates,
  fetchLaureatesError,
  receivedLaureates,
} from '../reducer/actions';

const API_ENDPOINT = 'http://localhost:4242/api/v1';

interface OwnProps {
  category: string;
}

const mapState = ({ laureates }: State) => ({
  ...laureates,
});

const mapDispatch = (dispatch: Dispatch, { category }: OwnProps) => ({
  fetch: () => {
    dispatch(fetchingLaureates());

    axios
      .get<Laureate[]>(`${API_ENDPOINT}/laureates`, {
        params: { category },
        headers: { Accept: 'application/json' },
      })
      .then((response) => response.data)
      .then((data) => dispatch(receivedLaureates(data)))
      .catch(() => dispatch(fetchLaureatesError()));
  },
});

export default connect(mapState, mapDispatch)(Component);
