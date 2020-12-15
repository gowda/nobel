import React from 'react';

import { useHistory } from 'react-router-dom';

interface Props {
  id: string;
  label: string;
  count: number;
}

export default ({ id, label, count }: Props) => {
  const history = useHistory();

  return (
    <div
      role='button'
      tabIndex={-1}
      className='card mt-4'
      style={{ width: '18rem' }}
      onClick={() => history.push(`/list?tab=${id}`)}
      onKeyPress={() => history.push(`/list?tab=${id}`)}
    >
      <div className='card-body'>
        <h5 className='card-title'>{label}</h5>
        <h1 className='card-text'>{count}</h1>
      </div>
    </div>
  );
};
