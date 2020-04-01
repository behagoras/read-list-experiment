import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Layout from './layouts/AppLayout';

// Routes
import Home from './pages/Home';

// Redux
import mockStore from './mocks/store.json';
import reducers from './reducers';
import GlobalStyles from './styles/globalStyles';

// Initialize store
const store = createStore(reducers, { original: mockStore, filtered: mockStore });;

const App = (props) => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
