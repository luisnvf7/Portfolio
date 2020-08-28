import React, { useState } from 'react';

import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl'

const Projects = () => {

  const [activeTab, setactiveTab] = useState(0)

  const toggleCategories = () => {
    if(activeTab == 0) {
      return (
        <Grid>
          <Cell col = {4}>
          <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
          <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://i.morioh.com/2019/11/15/2d0baf6e8708.jpg) center/ cover'}}>
            Graphql + NodeJs + React
          </CardTitle>
          <CardText>
            Project created by me using ReactJs, Graphql, Apollo and NodeJs
          </CardText>
          <CardActions border>
              <Button onClick = {() => window.open('https://github.com/luisnvf7/GraphqlReact')} colored>Github</Button>
              <Button colored>Live on Heroku</Button>
          </CardActions>
        </Card>
          </Cell>
        </Grid>
      
      )
    } else if (activeTab == 1) {
      return (
        <Grid>
        <Cell col = {4}>
        <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
        <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/NTeeBSX.jpg) center/ cover'}}>
          Ionic + Angular
        </CardTitle>
        <CardText>
          Project created by me and my university partner where we made a tinder clon using Ionic, Angular,
          Typescript and Firebase as an api Rest.
        </CardText>
        <CardActions border>
            <Button colored onClick = {() => window.open('https://github.com/pablocastillo123/Tinder-Ionic-Angular')}>Github</Button>
        </CardActions>
      </Card>
        </Cell>
      </Grid>
      )
    }else if (activeTab == 2) {
      return (
        <h1>Coming soon...</h1>
      )
    }else if (activeTab == 3) {
      return (
        <Grid>
        <Cell col = {4}>
        <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
        <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://c4.wallpaperflare.com/wallpaper/873/975/781/python-programming-minimalism-grey-technology-hd-wallpaper-preview.jpg) center/ cover'}}>
          Python
        </CardTitle>
        <CardText>
          Project created by me and my friends where we are scraping transfermarkt page to get all players in a team.
        </CardText>
        <CardActions border>
            <Button colored onClick = {() => window.open('https://github.com/luisnvf7/football-scraping-team')}>Github</Button>
        </CardActions>
      </Card>
        </Cell>
      </Grid>
      )
    }
  }

  return (
    <div className="category-tabs">
      <Tabs activeTab = {activeTab} onChange = {(tabId) => setactiveTab(tabId)} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJs</Tab>
          <Tab>Python</Tab>
      </Tabs>

      <section className = "projects-grid">
        <Grid className = "projects-grid">
          <Cell col = {12}>
            <div className = "content">{toggleCategories()}</div>
          </Cell>
        </Grid>
      </section>

    </div>
  );
}

export default Projects;