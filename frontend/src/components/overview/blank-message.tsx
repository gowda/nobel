import React from 'react';

export default () => (
  <div className='alert alert-info mt-4' role='alert'>
    <h4 className='font-weight-light'>Categories list is empty</h4>
    <p className='font-weight-light mt-2'>
      This can happen when the API server has not populated data by fetching
      from{' '}
      <a href='https://www.nobelprize.org/about/developer-zone-2/'>
        Nobel Prize API
      </a>
      . Sign in to initiate the process of populating the database on server.
    </p>
    <div className='row mt-2'>
      <div className='col-auto'>
        <button type='button' className='btn btn-info'>
          <span className='font-weight-light'>Sign in</span>
        </button>
      </div>
    </div>
  </div>
);
