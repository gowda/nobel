import React from 'react';

import { Award } from '../../types';

type Props = Award;

export default ({ year, motivation }: Props) => (
  <div className='row mt-2 align-items-start'>
    <div className='col-1 pr-0'>
      <p className='font-weight-light'>{year}</p>
    </div>
    <div className='col-11'>
      <p className='font-weight-light font-italic'>{motivation}</p>
    </div>
  </div>
);
