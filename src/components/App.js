import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  // Route,
} from 'react-router-dom';
import Categories from '../containers/Categories';

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Categories />
      </Switch>
    </Router>
  </div>
);

export default App;
