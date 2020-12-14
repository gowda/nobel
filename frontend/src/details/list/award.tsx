import React from 'react';

import Flag from './flag';

interface Props {
  year: string;
  country?: string;
  motivation: string;
}

export default ({ year, country, motivation }: Props) => (
  <div className='row align-items-center mt-2'>
    <div className='col-12'>
      <div className='row align-items-center'>
        <div className='col-auto pr-0'>
          <div className='row'>
            <div className='col-auto'>
              <strong>{year}</strong>
            </div>
          </div>
          {country && <Flag country={country} />}
        </div>
        <div className='col-10'>{motivation}</div>
      </div>
    </div>
  </div>
);
