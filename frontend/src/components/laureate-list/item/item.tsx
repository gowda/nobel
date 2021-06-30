import React from 'react';

import { Laureate, Org, Person } from '../../../reducer/types';
import AwardList from '../../award-list';
import PersonItem from './person';
import OrgItem from './org';

interface Props {
  item: Laureate;
}

export default ({ item }: Props) => (
  <li className='list-group-item' key={item.id}>
    <div className='row mb-1'>
      <div className='col'>
        <h5 className='font-weight-light'>{item.name}</h5>
      </div>
    </div>
    <div className='row mb-1'>
      <div className='col-3'>
        <img
          style={{ width: '100%' }}
          alt={item.name}
          src={item.thumbnailURL}
        />
      </div>
      <div className='col-9'>
        {item.person ? (
          <PersonItem {...(item as Person)} />
        ) : (
          <OrgItem {...(item as Org)} />
        )}
        <AwardList items={item.awards} />
      </div>
    </div>
  </li>
);
