import React from 'react';
import { connect } from 'react-redux';

import Tabs from './tabs';
import { State } from './reducer';

interface Props {
  items: any[];
}

const Component = ({ items }: Props) => {
  return (
    <>
      <Tabs />
      <div className='row mt-4'>
        <div className='col-12'>
          <ul className='list-group'>
            {items.map((item) => (
              <li className='list-group-item' key={item.id}>
                {item.name} - {item.awards}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const mapState = (state: State): any => {
  const categoryWise = state.laureates.reduce((acc, laureate) => {
    const categories: string[] = laureate.nobelPrizes.map(
      (p: any) => p.category
    );
    const includedCategories = Object.getOwnPropertyNames(acc);

    categories.forEach((category: string) => {
      if (includedCategories.includes(category)) {
        acc[category] = [...acc[category], laureate];
      } else {
        acc[category] = [laureate];
      }
    });

    return acc;
  }, {});

  return {
    items: categoryWise[state.tab!].map((laureate: any) => ({
      id: laureate.id,
      name: laureate.fullName,
      awards: laureate.nobelPrizes.map((p: any) => p.awardYear).join(','),
    })),
  };
};

export default connect(mapState)(Component);
