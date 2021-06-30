import React from 'react';

import { Award } from '../../reducer/types';
import Item from './item';

interface Props {
  items: Award[];
}

export default ({ items }: Props) => (
  <>
    {items.map((award: any) => (
      <Item key={award.year} {...award} />
    ))}
  </>
);
