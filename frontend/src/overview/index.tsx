import React from 'react';
import { connect } from 'react-redux';

import Card from './card';
import { State } from '../reducer';
import { Category } from '../reducer/types';

interface Props {
  categories: Category[];
}

const Component = ({ categories }: Props) => {
  return (
    <div className='row align-items-stretch justify-content-center'>
      {categories.map(({ id, label, count }) => (
        <div className='col' key={label}>
          <Card id={id} label={label} count={count} />
        </div>
      ))}
    </div>
  );
};

const mapState = (state: State): { categories: Category[] } => {
  const { categories } = state;
  return {
    categories,
  };
};

export default connect(mapState)(Component);
