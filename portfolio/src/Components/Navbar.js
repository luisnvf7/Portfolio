import React from 'react';

import { Layout, Header, Navigation, Drawer, Content  } from 'react-mdl'

import { Link } from 'react-router-dom' 
import Main from './Main';

const Navbar = () => {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className = "header-color" title="My Portfolio" scroll>
            <Navigation>
                <Link to = "/">Home</Link>
                <Link to = "/Aboutme">About me</Link>
                <Link to = "/Projects">Projects</Link>
                <Link to = "/Contactme">Contact me</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="#">Home</a>
                <a href="#">About me</a>
                <a href="#">Projects</a>
                <a href="#">Contact me</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className = "page-content">
                <Main />
            </div>
        </Content>
    </Layout>
</div>
  );
}

export default Navbar;
