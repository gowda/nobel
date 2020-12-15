import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  id: string;
  label: string;
  count: number;
}

const useQueryParams = () => {
  return new URLSearchParams(useLocation().search);
};

export default ({ id, label, count }: Props) => {
  const params = useQueryParams();
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    setActive(params.get('tab') === id);
  }, [params]);

  return (
    <li className='nav-item mr-1' key={label}>
      <Link
        to={`?tab=${id}`}
        className={`btn nav-link shadow-none ${
          active ? 'active' : 'btn-secondary inactive'
        }`}
      >
        {label} - {count}
      </Link>
    </li>
  );
};
