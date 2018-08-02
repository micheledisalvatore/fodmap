import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';

import { store } from './config/store';

import Header from './components/Header';
import TableFood from './components/TableFood';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Header />
      <TableFood />
    </Fragment>
  </Provider>
);

export default App;
