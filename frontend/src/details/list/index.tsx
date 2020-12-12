import React from 'react';

import Item from './item';

interface Props {
  items: any[];
}

export default ({ items }: Props) => {
  return (
    <ul className='list-group'>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  );
};
