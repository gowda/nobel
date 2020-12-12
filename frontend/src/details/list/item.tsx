import React from 'react';
import { Laureate } from '../../reducer';

import Person from './person';
import Org from './org';

interface Props {
  item: Laureate;
}

const isPerson = (laureate: Laureate) => !!laureate.gender;

export default ({ item }: Props) => (
  <li className='list-group-item' key={item.id}>
    {isPerson(item) ? <Person item={item} /> : <Org item={item} />}
  </li>
);
