import React from 'react';
import { Location } from '../../reducer/types';

import Date from './date';
import Place from './place';

interface Props {
  label: string;
  date: string;
  place: Location;
}

export default ({ label, date, place }: Props) => (
  <div className='row align-items-center'>
    <div className='col-12'>
      <div className='row'>
        <div className='col-auto'>
          <h6 className='mb-1 font-weight-light'>{label}</h6>
        </div>
      </div>
      <Date date={date} />
      <Place {...place} />
    </div>
  </div>
);
