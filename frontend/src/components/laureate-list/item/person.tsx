import React from 'react';
import { Person } from '../../../reducer/types';

import DateAndPlace from '../../date-and-place';

type Props = Person;

export default ({ birth, death }: Props) => (
  <div className='row align-items-center'>
    <div className='col-11'>
      <div className='row'>
        <div className='col-auto'>
          <DateAndPlace label='Born' date={birth.dateStr} place={birth.place} />
        </div>
        {death && (
          <div className='col-auto'>
            <DateAndPlace
              label='Died'
              date={death.dateStr}
              place={death.place}
            />
          </div>
        )}
      </div>
    </div>
  </div>
);
