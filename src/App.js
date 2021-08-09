import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={ () => <Home /> } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
