import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Item from './item';

import { Category } from '../../reducer/types';
import { State } from '../../reducer';

interface Props {
  categories: Category[];
}

const Component = ({ categories }: Props) => {
  return (
    <div className='row mt-4'>
      <div className='col'>
        <Route
          render={({ location, history }) => {
            const params = new URLSearchParams(location.search);
            const selected = params.get('tab');

            return (
              <ul className='nav nav-tabs justify-content-center'>
                {categories.map(({ label, count }) => (
                  <Item
                    key={label}
                    label={label}
                    count={count}
                    active={label.toLowerCase().replace(/ /g, '-') === selected}
                    onClick={() =>
                      history.push(
                        `?tab=${label.toLowerCase().replace(/ /g, '-')}`
                      )
                    }
                  />
                ))}
              </ul>
            );
          }}
        />
      </div>
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
