/* eslint-disable no-nested-ternary */
import React from 'react';
import { connect } from 'react-redux';

import Tabs from './tabs';
import { State } from '../reducer';
import { Laureate } from '../reducer/types';
import List from './list';

interface OwnProps {
  selected: string;
}

interface StateProps {
  items: Laureate[];
}

type Props = OwnProps & StateProps;

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

const mapState = (state: State, { selected }: OwnProps): StateProps => {
  const { categories } = state;

  return {
    items: categories.find(
      (c) => c.label.toLowerCase().replace(/ /g, '-') === selected
    )!.laureates,
  };
};

export default connect(mapState)(Component);
