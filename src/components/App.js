import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from '../containers/Nav';
import Home from '../containers/Home';
import allMeals from '../containers/AllRecipes';
import MealDetails from '../containers/ItemDetails';
import '../assets/styles/App.css';

const App = () => (
  <div className="App">
    <Navbar />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/category/:category" component={allMeals} />
      <Route path="/meal/:id" component={MealDetails} />
    </Switch>
  </div>
);

export default App;
