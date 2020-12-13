/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { connect } from 'react-redux';

import { State } from './reducer';

interface Props {
  total: number;
  fetched: number;
}

const Component = ({ total, fetched }: Props) => {
  return (
    <div className='container h-100'>
      {total !== 0 && (
        <>
          <div className='row'>
            <div className='col'>
              <h4>
                {`${
                  fetched === total ? 'Fetched' : `Fetching ${fetched} of`
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
                  style={{ width: `${(fetched * 100) / total}%` }}
                  aria-valuenow={fetched}
                  aria-valuemin={0}
                  aria-valuemax={total}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapState = (state: State) => ({
  ...state.meta,
});

export default connect(mapState)(Component);
