import React from 'react';

interface Props {
  message?: string | null;
  onRetry: () => void;
}

export default ({ message, onRetry }: Props) => (
  <div className='alert alert-danger' role='alert'>
    <h4 className='font-weight-light text-center'>{message}</h4>
    <div className='row justify-content-center mt-4'>
      <div className='col-auto'>
        <button type='button' className='btn btn-info' onClick={onRetry}>
          <span className='font-weight-light'>Retry</span>
        </button>
      </div>
    </div>
  </div>
);
