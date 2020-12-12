/* eslint-disable no-nested-ternary */
import React from 'react';
import { connect } from 'react-redux';

import Tabs from './tabs';
import { Laureate, State } from '../reducer';
import List from './list';

interface Props {
  items: Laureate[];
}

const Component = ({ items }: Props) => {
  return (
    <>
      <Tabs />
      <div className='row mt-4'>
        <div className='col-12'>
          <List items={items} />
        </div>
      </div>
    </>
  );
};

const mapState = (state: State): Props => {
  const { categories } = state;

  return {
    items: categories.find((c) => c.label === state.tab!)!.laureates,
  };
};

export default connect(mapState)(Component);
