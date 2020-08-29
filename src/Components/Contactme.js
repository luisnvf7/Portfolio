import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

const Contactme = () => {
  return (
    <div className="contact-body">
      <Grid className = "contact-grid">
        <Cell col = {6}>
          <h2>Luis Villalobos</h2>
          <img src = "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png" 
          alt = "avatar"
          style = {{height: '250px'}}
          />
          <p style = {{width: '75%', margin: 'auto', paddingTop: '1em'}}>          Here you are going to find all the information you need to contact me, if you want to talk to me or hire me, don't be afraid to do it</p>
          <p>I will be here for you!</p>
        </Cell>
        <Cell col = {6}>
          <h2>Contact me</h2>
          <hr />
          <div className = "contact-list">
          <List>
              <ListItem>
                  <ListItemContent style = {{fontSize: '23px', fontFamily: 'Anton' }}>
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                  +58 4120685806
                  </ListItemContent>
              </ListItem>
              <ListItem>
                  <ListItemContent style = {{fontSize: '23px', fontFamily: 'Anton' }}>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                    luisvillalobos.felipe@gmail.com
                  </ListItemContent>
              </ListItem>
              <ListItem>
                  <ListItemContent style = {{fontSize: '23px', fontFamily: 'Anton' }}>
                  <i className="fa fa-slack" aria-hidden="true"></i>
                    luisnazario2310@gmail.com
                  </ListItemContent>
              </ListItem>
              <ListItem>
                  <ListItemContent style = {{fontSize: '23px', fontFamily: 'Anton' }}>
                  <i className="fa fa-telegram" aria-hidden="true"></i>
                    luisnvf7
                  </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Contactme;