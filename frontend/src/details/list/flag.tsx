import React from 'react';

import codes from './countries';

interface Props {
  country: string;
}

export default ({ country }: Props) => (
  <span className='f32'>
    <i className={`flag ${codes[country] ? codes[country] : 'us'}`} />
  </span>
);
