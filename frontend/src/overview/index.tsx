import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Card from './card';
import { Category, State, TAB_CHANGED } from '../reducer';

interface Props {
  categories: Category[];
  onClick: (key: string) => void;
}

const Component = ({ categories, onClick }: Props) => {
  return (
    <div className='row align-items-stretch justify-content-center'>
      {categories.map(({ label, count }) => (
        <div className='col' key={label}>
          <Card label={label} count={count} onClick={() => onClick(label)} />
        </div>
      ))}
    </div>
  );
};

const mapState = (state: State): { categories: Category[] } => {
  const { categories } = state;
  return {
    categories: Object.getOwnPropertyNames(categories).map((category) => ({
      label: category,
      count: categories[category].length,
    })),
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onClick: (key: string) => dispatch({ type: TAB_CHANGED, payload: key }),
});

export default connect(mapState, mapDispatch)(Component);
