/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { connect } from 'react-redux';

import { State } from './reducer';

interface Props {
  total: number;
  done: number;
}

const Component = ({ total, done }: Props) => {
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
        </>
      )}
    </div>
  );
};

const mapState = (state: State) => ({
  total: state.total,
  done: state.laureates.length,
});

export default connect(mapState)(Component);
