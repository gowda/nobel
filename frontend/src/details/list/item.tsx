import React from 'react';
import { Laureate } from '../../reducer/types';

interface Props {
  item: Laureate;
}

export default ({ item }: Props) => (
  <li className='list-group-item' key={item.id}>
    <div className='row mb-1'>
      <div className='col'>
        <h5 className='font-weight-light'>{item.name}</h5>
      </div>
    </div>
    <div className='row mb-1'>
      <div className='col-3'>
        <img
          style={{ width: '100%' }}
          alt={item.name}
          src={item.thumbnailURL}
        />
      </div>
      <div className='col-9'>
        {item.awards.map((award: any) => (
          <div className='row' key={award.year}>
            <div className='col-1 pr-0'>
              <h6 className='font-weight-light'>{award.year}</h6>
            </div>
            <div className='col-11'>
              <p className='font-weight-light'>{award.motivation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </li>
);
