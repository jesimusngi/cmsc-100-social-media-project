import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import Login from './components/Login';

import 'semantic-ui-css/semantic.min.css';

ReactDOM.render((
  <BrowserRouter>
    <div>
    	  <Route exact={true} path='/login' component={Login} />
    </div>
  </BrowserRouter>
  ),
  document.getElementById('root')
);