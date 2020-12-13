import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Progress from './progress';
import Overview from './overview';
import Details from './details';

import fetch from './fetch';

import {
  DONE_FETCHING,
  FETCHING_LAUREATES,
  RECEIVED_COUNT,
  RECEIVED_LAUREATES,
  State,
} from './reducer';

type Props = State & {
  onFetch: () => void;
};

const Component = ({
  tab,
  total,
  fetching,
  doneFetch,
  needFetch,
  onFetch,
}: Props) => {
  useEffect(() => {
    if (needFetch) {
      onFetch();
    }
  }, [needFetch]);

  return (
    <div className='container h-100'>
      {doneFetch && (tab ? <Details /> : <Overview />)}
      {total !== 0 && fetching && <Progress />}
    </div>
  );
};

const mapState = (state: State) => state;

const mapDispatch = (dispatch: Dispatch) => {
  return {
    onFetch: () => {
      dispatch({ type: FETCHING_LAUREATES });

      return fetch()
        .then((data) => [data.laureates, data.categories, data.meta])
        .then(([laureates, categories, { limit, count }]) => {
          dispatch({ type: RECEIVED_COUNT, payload: count });
          dispatch({
            type: RECEIVED_LAUREATES,
            payload: { laureates, categories },
          });

          return Promise.all(
            [...Array(Math.floor(count / limit)).keys()].map((_, index) =>
              fetch((index + 1) * limit).then(
                ({ laureates: ilaureates, categories: icategories }) => {
                  dispatch({
                    type: RECEIVED_LAUREATES,
                    payload: {
                      laureates: ilaureates,
                      categories: icategories,
                    },
                  });
                }
              )
            )
          );
        })
        .then(() => dispatch({ type: DONE_FETCHING }));
    },
  };
};

export default connect(mapState, mapDispatch)(Component);
