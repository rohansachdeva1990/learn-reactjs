import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Movies from './components/movies';
import MovieForm from './components/movieForm';
import Rentals from './components/rentals';
import Customers from './components/customers';
import NotFound from './components/notFound';
import NavBar from './components/navbar';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className='container'>
        <Switch>
          <Route path='/movies/:id' component={MovieForm} />
          <Route path='/movies' component={Movies} />
          <Route path='/rentals' component={Rentals} />
          <Route path='/customers' component={Customers} />
          <Route path='/not-found' component={NotFound} />
          <Redirect exact from='/' to='/movies' />
          <Redirect to='/not-found' />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
