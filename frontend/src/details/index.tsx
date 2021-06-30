import React from 'react';

import Navigation from '../containers/navigation';
import List from '../containers/list';

interface Props {
  category: string;
}

export default ({ category }: Props) => (
  <div className='row mt-4'>
    <div className='col-3'>
      <Navigation current={category} />
    </div>
    <div className='col-9'>
      {category ? <List category={category} /> : <h4>Content goes here</h4>}
    </div>
  </div>
);
