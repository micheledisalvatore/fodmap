import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';

import { store, runSaga } from './config/store';
import sagas from './sagas';

import Header from './components/Header';
import TableFood from './components/TableFood';

runSaga(sagas);

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Header />
      <TableFood />
    </Fragment>
  </Provider>
);

export default App;
