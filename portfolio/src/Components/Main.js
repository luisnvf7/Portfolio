import React from 'react';

import { Switch, Route  } from 'react-router-dom'

import Home from './Home'
import Aboutme from './Aboutme';
import Projects from './Projects';
import Contactme from './Contactme';

const Main = () => {
  return (
    <Switch>
      <Route exact path = "/" component = {Home} />
      <Route path = "/Aboutme" component = {Aboutme} />
      <Route path = "/Projects" component = {Projects} />
      <Route path = "/Contactme" component = {Contactme} />
    </Switch>
  );
}

export default Main;
