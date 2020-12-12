import React from 'react';
import { Category } from '../reducer';

type Props = Category & {
  onClick: () => void;
};

export default ({ label, count, onClick }: Props) => (
  <div
    role='button'
    tabIndex={-1}
    className='card mt-4'
    style={{ width: '18rem' }}
    onClick={() => onClick()}
    onKeyPress={() => onClick()}
  >
    <div className='card-body'>
      <h5 className='card-title'>{label}</h5>
      <h1 className='card-text'>{count}</h1>
    </div>
  </div>
);
