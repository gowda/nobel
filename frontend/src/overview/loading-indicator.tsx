import React from 'react';

export default () => (
  <div className='row align-items-center justify-content-center mt-4 mb-4'>
    <div className='col-auto'>
      <div className='spinner-border text-secondary' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
    <div className='col-auto'>
      <h2 className='text-muted font-weight-light'>Fetching categories...</h2>
    </div>
  </div>
);
