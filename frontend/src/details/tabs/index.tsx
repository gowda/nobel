import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Item from './item';

import { Category, State, TAB_CHANGED } from '../../reducer';

interface Props {
  selected: string;
  categories: Category[];
  onClick: (key: string) => void;
}

const Component = ({ selected, categories, onClick }: Props) => {
  return (
    <div className='row mt-4'>
      <div className='col'>
        <ul className='nav nav-tabs justify-content-center'>
          {categories.map(({ label, count }) => (
            <Item
              label={label}
              count={count}
              active={label === selected}
              onClick={() => onClick(label)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapState = (
  state: State
): { categories: Category[]; selected: string } => {
  const { tab, categories } = state;

  return {
    categories,
    selected: tab!,
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onClick: (key: string) => dispatch({ type: TAB_CHANGED, payload: key }),
});

export default connect(mapState, mapDispatch)(Component);
