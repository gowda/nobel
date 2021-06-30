import React from 'react';
import { Location } from '../../reducer/types';

type Props = Location;

export default ({ name }: Props) => (
  <div className='row align-items-center'>
    <div className='col-auto font-weight-light'>{name}</div>
  </div>
);
