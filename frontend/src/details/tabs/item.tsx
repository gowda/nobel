import React from 'react';

interface Props {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}

export default ({ label, count, active, onClick }: Props) => {
  return (
    <li className='nav-item mr-1' key={label}>
      <button
        type='button'
        className={`btn nav-link shadow-none ${
          active ? 'active' : 'btn-secondary inactive'
        }`}
        onClick={() => onClick()}
      >
        {label} - {count}
      </button>
    </li>
  );
};
