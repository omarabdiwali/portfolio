import React from 'react';
import PageHeader from './components/Header';
import HomePage from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <PageHeader />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
