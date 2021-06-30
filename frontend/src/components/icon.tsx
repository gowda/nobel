import React from 'react';

interface Props {
  id: string;
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

export default ({ id }: Props) => (
  <img
    className='mr-2'
    src={ICONS[id].url}
    alt={ICONS[id].alt}
    style={{ width: '32px', height: '32px' }}
  />
);
