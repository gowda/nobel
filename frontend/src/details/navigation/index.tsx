import React, { useEffect, useState } from 'react';
import { Category } from '../../reducer/types';

import Item from './item';

interface Props {
  current: string;
  categories: Category[];
  onChange: () => void;
}

export default ({ current, categories, onChange }: Props) => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    setActive(current);
    onChange();
  }, [current]);

  return (
    <div className='navigation'>
      {categories.map(({ id, short }) => (
        <Item id={id} name={short} active={active === id} />
      ))}
    </div>
  );
};
