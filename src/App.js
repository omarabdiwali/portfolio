import React from 'react';
import PageHeader from './components/Header';
import Colour from './components/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <PageHeader />
      <Switch>
        <Route exact path="/">
          <Colour />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;