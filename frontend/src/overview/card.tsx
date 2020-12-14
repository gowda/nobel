import React from 'react';

import { Route } from 'react-router-dom';

interface Props {
  label: string;
  count: number;
}

export default ({ label, count }: Props) => (
  <Route
    render={({ history }) => (
      <div
        role='button'
        tabIndex={-1}
        className='card mt-4'
        style={{ width: '18rem' }}
        onClick={() =>
          history.push(`/list?tab=${label.toLowerCase().replace(/ /g, '-')}`)
        }
        onKeyPress={() =>
          history.push(`/list?tab=${label.toLowerCase().replace(/ /g, '-')}`)
        }
      >
        <div className='card-body'>
          <h5 className='card-title'>{label}</h5>
          <h1 className='card-text'>{count}</h1>
        </div>
      </div>
    )}
  />
);
