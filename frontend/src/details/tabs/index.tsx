import React from 'react';
import { connect } from 'react-redux';

import Item from './item';

import { Category } from '../../reducer/types';
import { State } from '../../reducer';

interface Props {
  categories: Category[];
}

const Component = ({ categories }: Props) => (
  <div className='row mt-4'>
    <div className='col'>
      <ul className='nav nav-tabs justify-content-center'>
        {categories.map(({ id, label, count }) => (
          <Item key={id} id={id} label={label} count={count} />
        ))}
      </ul>
    </div>
  </div>
);

const mapState = (state: State): { categories: Category[] } => {
  const { categories } = state;

  return {
    categories,
  };
};

export default connect(mapState)(Component);
