import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: string;
  name: string;
  active: boolean;
}

export default ({ id, name, active }: Props) => (
  <Link
    to={`?tab=${id}`}
    className={`navigation-item ${active ? 'active' : 'font-weight-light'}`}
  >
    {name}
  </Link>
);
