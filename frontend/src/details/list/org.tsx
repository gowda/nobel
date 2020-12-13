import React from 'react';
import { Laureate } from '../../reducer/types';

import Icon from './icon';
import DateAndPlace from './date-and-place';
import Award from './award';

interface Props {
  item: Laureate;
}

export default ({ item }: Props) => (
  <div className='row align-items-center'>
    <div className='col-auto pr-0'>
      <Icon id='org' />
    </div>
    <div className='col-11'>
      <div className='row align-items-center'>
        <div className='col-auto'>
          <h2>{item.name}</h2>
        </div>
        <div className='col-auto'>{item.awards}</div>
      </div>
      {item.nobelPrizes.map((prize: any) => (
        <Award
          year={prize.awardYear}
          country={
            prize.affiliations ? prize.affiliations[0].countryNow : undefined
          }
          motivation={prize.motivation}
        />
      ))}
      {item.founded && (
        <div className='row mt-4'>
          <div className='col-auto'>
            <DateAndPlace
              label='Founded'
              date={item.founded.date}
              place={{
                label: item.founded.place
                  ? item.founded.place.locationString
                  : 'Not available',
                country: item.country,
              }}
            />
          </div>
        </div>
      )}
    </div>
  </div>
);
