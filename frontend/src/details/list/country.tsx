import React from 'react';

import Flag from './flag';
import countries from './countries';

interface Props {
  label: string;
  country: string;
}

export default ({ label, country }: Props) => (
  <div className='row align-items-center'>
    <div className='col-12'>
      <div className='row'>
        <div className='col-auto'>
          <strong>{label}</strong>
        </div>
      </div>
      <div className='row align-items-center'>
        <div className='col-auto pr-0'>
          <Flag country={country} />
        </div>
        <div className='pl-1 col-auto'>
          {country} ({countries[country]})
        </div>
      </div>
    </div>
  </div>
);
