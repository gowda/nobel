import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Overview from './containers/overview';
import Details from './components/details';

export default () => (
  <div className='container h-100'>
    <Router>
      <Switch>
        <Route
          path='/list'
          render={({ location }) => {
            const params = new URLSearchParams(location.search);
            const selected = params.get('tab')!;

            return <Details category={selected} />;
          }}
        />
        <Route path='/'>
          <Overview />
        </Route>
      </Switch>
    </Router>
  </div>
);
