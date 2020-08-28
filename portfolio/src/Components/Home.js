import React from 'react';

import {  Grid, Cell } from 'react-mdl'

const Home = () => {
  return (
    <div style = {{widht: '100%', margin: 'auto'}}>
      <Grid className = "landing-grid">
        <Cell col = {12}>
          <img src = "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png"
          alt = "avatar"
          className = "avatar-img"/>
          <div className = "banner-text">
            <h1>Full Stack Web Developer</h1>
            <hr />
            <p>Javascript | React | React Native | Angular | VueJs | NodeJs</p>
            <div className = "social-links">
              <a>
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a>
                <i className="fa fa-slack" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Home;