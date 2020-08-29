import React from 'react';

import { Switch, Route  } from 'react-router-dom'

import Home from './Home'
import Aboutme from './Aboutme';
import Projects from './Projects';
import Contactme from './Contactme';

const Main = () => {
  return (
    <Switch>
      <Route exact path = "Portfolio/" component = {Home} />
      <Route path = "Portfolio/Aboutme" component = {Aboutme} />
      <Route path = "Portfolio/Projects" component = {Projects} />
      <Route path = "Portfolio/Contactme" component = {Contactme} />
    </Switch>
  );
}

export default Main;
