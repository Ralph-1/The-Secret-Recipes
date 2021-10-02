import React from 'react';
import {
  Switch,
} from 'react-router-dom';
import Navbar from '../containers/Nav';
import Categories from '../containers/Categories';

const App = () => (
  <div className="App">
    <Navbar />
    <Switch>
      <Categories />
    </Switch>
  </div>
);

export default App;
