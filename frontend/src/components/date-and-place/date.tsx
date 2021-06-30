import React from 'react';

interface Props {
  date: string;
}

export default ({ date }: Props) => (
  <div className='row'>
    <div className='col-auto font-weight-light'>{date}</div>
  </div>
);
