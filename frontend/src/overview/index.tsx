import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Category } from '../reducer/types';

import LoadingIndicator from './loading-indicator';
import ErrorMessage from './error-message';
import BlankMessage from './blank-message';
import CardList from './card-list';

const API_ENDPOINT = 'http://localhost:4242/api/v1';

export default () => {
  const [fetched, setFetched] = useState<boolean>(false);
  const [fetching, setFetching] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!fetched && !fetching && !error) {
      setFetching(true);

      axios
        .get<Category[]>(`${API_ENDPOINT}/categories`, {
          headers: { Accept: 'application/json' },
        })
        .then((response) => response.data)
        .then((data) => setCategories(data))
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
