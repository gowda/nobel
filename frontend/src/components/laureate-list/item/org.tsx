import React from 'react';
import { Org } from '../../../types';

import DateAndPlace from '../../date-and-place';

type Props = Org;

export default ({ nativeName, acronym, founded }: Props) => (
  <div className='row align-items-center'>
    <div className='col-11'>
      <div className='row align-items-center'>
        <div className='col-auto'>
          <h5 className='font-weight-light'>
            {nativeName}
            {acronym ? `, ${acronym}` : ''}
          </h5>
        </div>
      </div>
      {founded && (
        <>
          <div className='row'>
            <div className='col-auto'>
              <DateAndPlace
                label='Founded'
                date={founded.dateStr}
                place={founded.place}
              />
            </div>
          </div>
        </>
      )}
    </div>
  </div>
);
