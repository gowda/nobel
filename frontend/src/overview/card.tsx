import React from 'react';

import { Link } from 'react-router-dom';

interface Props {
  id: string;
  label: string;
  count: number;
}

export default ({ id, label, count }: Props) => (
  <Link to={`/list?tab=${id}`} className='card mt-4' style={{ width: '18rem' }}>
    <div className='card-body'>
      <h5 className='card-title'>{label}</h5>
      <h1 className='card-text'>{count}</h1>
    </div>
  </Link>
);
