/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State, TAB_CHANGED } from './reducer';

type Props = {
  onTabChange: (key: string) => void;
  tab: string;
  items: any[];
} & {
  [key: string]: any;
};

const Component = ({ items, tab, onTabChange, ...rest }: Props) => {
  return (
    <>
      <div className='row mt-4'>
        <div className='col'>
          <ul className='nav nav-tabs justify-content-center'>
            {Object.getOwnPropertyNames(rest)
              .filter((key: string) => !(rest[key] instanceof Function))
              .map((key: string) => (
                <li className='nav-item mr-1' key={key}>
                  <button
                    type='button'
                    className={`btn nav-link shadow-none ${
                      key === tab ? 'active' : 'btn-secondary inactive'
                    }`}
                    onClick={() => onTabChange(key)}
                  >
                    {key} - {rest[key]}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
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
    ...Object.getOwnPropertyNames(categoryWise).reduce(
      (acc: any, category: string) => ({
        ...acc,
        [category]: categoryWise[category].length,
      }),
      {}
    ),
    items: categoryWise[state.tab!].map((laureate: any) => ({
      id: laureate.id,
      name: laureate.fullName,
      awards: laureate.nobelPrizes.map((p: any) => p.awardYear).join(','),
    })),
    tab: state.tab,
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onTabChange: (key: string) => dispatch({ type: TAB_CHANGED, payload: key }),
});

export default connect(mapState, mapDispatch)(Component);
