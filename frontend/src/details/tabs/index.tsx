import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import Item from './item';

import { Category } from '../../reducer/types';
import { State } from '../../reducer';

interface Props {
  categories: Category[];
}

const useQueryParams = () => {
  return new URLSearchParams(useLocation().search);
};

const Component = ({ categories }: Props) => {
  const params = useQueryParams();
  const history = useHistory();
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    setSelected(params.get('tab'));
  }, [params]);

  return (
    <div className='row mt-4'>
      <div className='col'>
        <ul className='nav nav-tabs justify-content-center'>
          {categories.map(({ id, label, count }) => (
            <Item
              key={id}
              label={label}
              count={count}
              active={id === selected}
              onClick={() => history.push(`?tab=${id}`)}
            />
          ))}
        </ul>
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
