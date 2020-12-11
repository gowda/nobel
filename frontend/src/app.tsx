/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import normalizeLanguage from './normalize-language';
import Awards from './awards';
import TabbedView from './tabbed-view';

import {
  DONE_FETCHING,
  FETCHING_LAUREATES,
  RECEIVED_COUNT,
  RECEIVED_LAUREATES,
  State,
} from './reducer';

const fetch = (offset: number = 0) => {
  return axios
    .get(`https://api.nobelprize.org/2.0/laureates?limit=25&offset=${offset}`)
    .then((response) => response.data)
    .then(({ laureates, ...rest }) => ({
      ...rest,
      laureates: (laureates as any[]).map((laureate) =>
        normalizeLanguage(laureate)
      ),
    }));
};

type Props = State & {
  done: number;
  onFetch: () => void;
};

const Component = ({ tab, total, done, needFetch, onFetch }: Props) => {
  useEffect(() => {
    if (needFetch) {
      onFetch();
    }
  }, [needFetch]);

  return (
    <div className='container h-100'>
      {total !== 0 && (
        <>
          <div className='row'>
            <div className='col'>
              <h4>
                {`${
                  done === total ? 'Fetched' : `Fetching ${done} of`
                } ${total}`}
              </h4>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='progress'>
                <div
                  className='progress-bar'
                  role='progressbar'
                  style={{ width: `${(done * 100) / total}%` }}
                  aria-valuenow={done}
                  aria-valuemin={0}
                  aria-valuemax={total}
                />
              </div>
            </div>
          </div>
          {total === done && (tab ? <TabbedView /> : <Awards />)}
        </>
      )}
    </div>
  );
};

const mapState = (state: State) => ({ ...state, done: state.laureates.length });

const mapDispatch = (dispatch: Dispatch) => {
  return {
    onFetch: () => {
      dispatch({ type: FETCHING_LAUREATES });

      return fetch()
        .then((data) => [data.laureates, data.meta])
        .then(([laureates, { limit, count }]) => {
          dispatch({ type: RECEIVED_COUNT, payload: count });
          dispatch({ type: RECEIVED_LAUREATES, payload: laureates });

          return Promise.all(
            [...Array(Math.floor(count / limit)).keys()].map((_, index) =>
              fetch((index + 1) * limit).then((data) => {
                dispatch({ type: RECEIVED_LAUREATES, payload: data.laureates });
              })
            )
          );
        })
        .then(() => dispatch({ type: DONE_FETCHING }));
    },
  };
};

export default connect(mapState, mapDispatch)(Component);
