import React from 'react';

import { Switch, Route  } from 'react-router-dom'

import Home from './Home'
import Aboutme from './Aboutme';
import Projects from './Projects';
import Contactme from './Contactme';

const Main = () => {
  return (
    <Switch>
      <Route exact path = "https://luisnvf7.github.io/Portfolio/" component = {Home} />
      <Route path = "https://luisnvf7.github.io/Portfolio/Aboutme" component = {Aboutme} />
      <Route path = "https://luisnvf7.github.io/Portfolio/Projects" component = {Projects} />
      <Route path = "https://luisnvf7.github.io/Portfolio/Contactme" component = {Contactme} />
    </Switch>
  );
}

export default Main;
