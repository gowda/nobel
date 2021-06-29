import React, { useEffect, useState } from 'react';

import { Category } from '../reducer/types';

import LoadingIndicator from './loading-indicator';
import ErrorMessage from './error-message';
import BlankMessage from './blank-message';
import CardList from './card-list';

interface Props {
  categories: Category[];
  fetch: () => Promise<any>;
}

export default ({ categories, fetch }: Props) => {
  const [fetched, setFetched] = useState<boolean>(false);
  const [fetching, setFetching] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!fetched && !fetching && !error) {
      setFetching(true);

      fetch()
        .then(() => setFetched(true))
        .then(() => setFetching(false))
        .catch(() => {
          setFetching(false);
          setError('Oops! Something went wrong. Failed to fetch categories');
        });
    }
  }, [fetched, fetching, error]);

  return (
    <>
      {fetching && <LoadingIndicator />}
      {error && <ErrorMessage message={error} onRetry={() => setError(null)} />}
      {fetched && categories.length === 0 && <BlankMessage />}
      {fetched && categories.length !== 0 && (
        <CardList categories={categories} />
      )}
    </>
  );
};
