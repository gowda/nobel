/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State, TAB_CHANGED } from './reducer';

type Props = { onClick: (key: string) => void } & { [key: string]: any };

const Component = ({ onClick, ...rest }: Props) => {
  return (
    <div className='row align-items-stretch justify-content-center'>
      {Object.getOwnPropertyNames(rest)
        .filter((key: string) => !(rest[key] instanceof Function))
        .map((key: string) => (
          <div className='col' key={key}>
            <div
              role='button'
              tabIndex={-1}
              className='card mt-4'
              style={{ width: '18rem' }}
              onClick={() => onClick(key)}
              onKeyPress={() => onClick(key)}
            >
              <div className='card-body'>
                <h5 className='card-title'>{key}</h5>
                <h1 className='card-text'>{rest[key]}</h1>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

const mapState = (state: State): any => {
  const { categories } = state;
  return {
    ...Object.getOwnPropertyNames(categories).reduce(
      (acc: any, category) => ({
        ...acc,
        [category]: categories[category].length,
      }),
      {}
    ),
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onClick: (key: string) => dispatch({ type: TAB_CHANGED, payload: key }),
});

export default connect(mapState, mapDispatch)(Component);
