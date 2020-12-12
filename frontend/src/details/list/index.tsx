import React from 'react';
import { Laureate } from '../../reducer';

import Item from './item';

interface Props {
  items: Laureate[];
}

export default ({ items }: Props) => (
  <ul className='list-group'>
    {items.map((item) => (
      <Item item={item} />
    ))}
  </ul>
);
