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
      <Icon id={item.gender} />
    </div>
    <div className='col-11'>
      <div className='row align-items-center'>
        <div className='col-auto'>
          <h2>{item.name}</h2>
        </div>
        <div className='col-auto pl-0'>{item.awards}</div>
      </div>
      {item.nobelPrizes.map((prize: any) => (
        <Award
          key={prize.awardYear}
          year={prize.awardYear}
          country={
            prize.affiliations ? prize.affiliations[0].countryNow : undefined
          }
          motivation={prize.motivation}
        />
      ))}
      <div className='row mt-4'>
        <div className='col-auto'>
          <DateAndPlace
            label='Born'
            date={item.birth.date}
            place={{
              label: item.birth.place.locationString,
              country: item.country,
            }}
          />
        </div>
        {item.death ? (
          <div className='col-auto'>
            <DateAndPlace
              label='Died'
              date={item.death.date}
              place={{
                label: item.death.place.locationString,
                country: item.death.place.countryNow,
              }}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  </div>
);
