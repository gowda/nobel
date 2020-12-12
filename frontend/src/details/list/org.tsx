import React from 'react';
import { Laureate } from '../../reducer';

import Icon from './icon';
import Country from './country';

interface Props {
  item: Laureate;
}

export default ({ item }: Props) => (
  <div className='row align-items-center'>
    <div className='col-auto pr-0'>
      <Icon id='org' />
    </div>
    <div className='col-11'>
      <div className='row align-items-center'>
        <div className='col-auto'>
          <h2>{item.name}</h2>
        </div>
        <div className='col-auto'>{item.awards}</div>
      </div>
      <div className='row'>
        <div className='col-auto'>
          <Country label='Founded in' country={item.country} />
        </div>
      </div>
    </div>
  </div>
);
