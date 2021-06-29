import React from 'react';

import { Link } from 'react-router-dom';
import { Category } from '../reducer/types';

type Props = Category;

export default ({ id, short, laureateCount, prizeCount }: Props) => (
  <div className='card h-100'>
    <div className='card-body'>
      <Link to={`/list?tab=${id}`}>
        <h5 className='card-title font-weight-light'>{short}</h5>
      </Link>
      <div className='row justify-content-start'>
        <div className='col-auto pr-0'>
          <h4 className='card-text font-weight-light'>{prizeCount} prizes</h4>
        </div>
        <div className='col-auto'>
          <h4 className='card-text font-weight-light'>
            {laureateCount} laureates
          </h4>
        </div>
      </div>
    </div>
  </div>
);
