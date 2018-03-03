import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Internal from './Internal';
import HomeContainer from './HomeContainer';


const Root = () => (
  <Router>
  	<div>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/internal" component={Internal} />
    </div>
  </Router>
);

export default Root;
