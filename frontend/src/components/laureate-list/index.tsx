import React, { useEffect } from 'react';
import { Laureate } from '../../types';

import LoadingIndicator from '../loading-indicator';
import ErrorMessage from '../error-message';
import Item from './item/item';

interface Props {
  fetched: boolean;
  fetching: boolean;
  error: string | null;
  data: Laureate[];
  fetch: () => void;
}

export default ({ fetched, fetching, error, data, fetch }: Props) => {
  useEffect(() => {
    if (!fetched && !fetching && !error) {
      fetch();
    }
  }, [fetched, fetching, error]);

  return (
    <>
      {error && <ErrorMessage message={error} onRetry={fetch} />}
      {fetching && <LoadingIndicator message='Fetching laureates...' />}
      {data.length !== 0 && (
        <ul className='list-group'>
          {data.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
      )}
    </>
  );
};
