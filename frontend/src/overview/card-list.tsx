import React from 'react';

import Card from './card';
import { Category } from '../reducer/types';

interface Props {
  categories: Category[];
}

export default ({ categories }: Props) => (
  <div className='row align-items-stretch justify-content-center'>
    {categories.map((category) => (
      <div className='col-4 mt-4' key={category.id}>
        <Card {...category} />
      </div>
    ))}
  </div>
);
