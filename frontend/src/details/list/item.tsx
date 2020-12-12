import React from 'react';

import countries from './countries';

interface Props {
  item: any;
}

const ICONS: {
  [key: string]: { url: string; alt: string };
} = {
  male: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Mars_symbol.svg',
    alt: 'male',
  },
  female: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Venus_symbol.svg',
    alt: 'female',
  },
  org: {
    url:
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Octicons-organization.svg',
    alt: 'org',
  },
};

export default ({ item }: Props) => {
  return (
    <li className='list-group-item d-flex align-items-center' key={item.id}>
      <img
        className='mr-2'
        src={ICONS[item.gender].url}
        alt={ICONS[item.gender].alt}
        style={{ width: '32px', height: '32px' }}
      />
      <span className='f32 mr-2'>
        <i
          className={`flag ${
            countries[item.country] ? countries[item.country] : 'us'
          }`}
        />
      </span>
      {item.country} ({countries[item.country]}) - {item.name} - {item.awards}
    </li>
  );
};
