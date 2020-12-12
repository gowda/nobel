/* eslint-disable no-nested-ternary */
import React from 'react';
import { connect } from 'react-redux';

import Tabs from './tabs';
import { State } from '../reducer';
import List from './list';

interface Props {
  items: any[];
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
    items: categories[state.tab!].map((laureate: any) => ({
      id: laureate.id,
      name: laureate.fullName
        ? laureate.fullName
        : laureate.orgName
        ? laureate.orgName
        : `${laureate.givenName} ${laureate.familyName}`,
      country: laureate.birth
        ? laureate.birth.place
          ? laureate.birth.place.countryNow
          : 'Unknown'
        : laureate.founded
        ? laureate.founded.place
          ? laureate.founded.place.countryNow
          : 'Unknown'
        : 'Unknown',
      gender: laureate.gender ? laureate.gender : 'org',
      awards: laureate.nobelPrizes.map((p: any) => p.awardYear).join(','),
    })),
  };
};

export default connect(mapState)(Component);
