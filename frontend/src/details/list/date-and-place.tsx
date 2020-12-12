import React from 'react';

import Flag from './flag';
import countries from './countries';

interface Props {
  label: string;
  date: string;
  place: { label: string; country: string };
}

export default ({ label, date, place }: Props) => (
  <div className='row align-items-center'>
    <div className='col-12'>
      <div className='row'>
        <div className='col-auto'>
          <strong>{label}</strong>
        </div>
      </div>
      <div className='row'>
        <div className='col-auto'>{date}</div>
      </div>
      {place.country && (
        <div className='row align-items-center'>
          <div className='col-auto pr-0'>
            <Flag country={place.country} />
          </div>
          <div className='pl-1 col-auto'>
            {place.country} ({countries[place.country]})
          </div>
        </div>
      )}
    </div>
  </div>
);
