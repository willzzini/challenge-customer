import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeContainer from './HomeContainer';


const Root = () => (
  <Router>
  	<div>
      <Route exact path="/" component={HomeContainer} />
    </div>
  </Router>
);

export default Root;
