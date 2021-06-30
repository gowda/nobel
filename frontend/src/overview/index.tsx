import React, { useEffect } from 'react';

import { Category } from '../reducer/types';

import LoadingIndicator from '../components/loading-indicator';
import ErrorMessage from '../components/error-message';
import BlankMessage from './blank-message';
import CardList from './card-list';

interface Props {
  fetched: boolean;
  fetching: boolean;
  error: string | null;
  data: Category[];
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
      {fetching && <LoadingIndicator message='Fetching categories...' />}
      {error && <ErrorMessage message={error} onRetry={fetch} />}
      {fetched && data.length === 0 && <BlankMessage />}
      {fetched && data.length !== 0 && <CardList categories={data} />}
    </>
  );
};
