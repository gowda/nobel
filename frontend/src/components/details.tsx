import React from 'react';

import Navigation from '../containers/navigation';
import LaureateList from '../containers/laureate-list';

interface Props {
  category: string;
}

export default ({ category }: Props) => (
  <div className='row mt-4'>
    <div className='col-3'>
      <Navigation current={category} />
    </div>
    <div className='col-9'>
      <LaureateList category={category} />
    </div>
  </div>
);
