import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Skills from './Skills';

const Aboutme = () => {
  return (
    <div className="App">
      <Grid>
        <Cell col = {4}>
          <div style = {{textAlign: 'center'}}>
            <img src = "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png" 
              alt = "avatar"
              style = {{height: '200px'}}
            />
          </div>
          <h2 style = {{paddingTop: '2em'}}>Luis Villalobos</h2>
          <h4 style = {{color: 'grey'}}>Programmer</h4>
          <hr style = {{borderTop: '3px solid #833fb2', width: '100%'}} />
          <p>Hello, My name is Luis Villalobos, I am 21 years old, I am currently studying the last trimester of the computing engineering degree. I consider that I am a person who likes challenges and loves to overcome them. I would like to be part of a company to be able to apply the knowledge obtained throughout my career. I am an organized person who has excellent communication with any work team. I hope you enjoy my portfolio website. If you would like to write me visit the "Contact me page", I will respond you as soon as possible. In this page, you will be able to check my currents skills and where I got my degree or when I will get it.</p>
          <hr style = {{borderTop: '3px solid #833fb2', width: '100%'}} />
          <h5>Country / City</h5>
          <p>Venezuela / Maracaibo</p>
          <h5>Phone</h5>
          <p>+58 4120685806</p>
          <h5>Email</h5>
          <p>luisvillalobos.felipe@gmail.com</p>
        </Cell>
        <Cell className = "resume-right-col" col = {8}>
          <h2 style = {{textAlign: 'center'}}>Education</h2>
          <Education startYear = {2011} finalYear = {2016} shoolName = "Maristas" shoolDescription = "High School" />
          <Education startYear = {2016} finalYear = {"soon"} shoolName = "Rafael Urdaneta" shoolDescription = "University" />
          <hr style = {{borderTop: '3px solid #e22947'}} />
          <Skills skill = "Javascript" progress = {90} />
          <Skills skill = "React" progress = {80} />
          <Skills skill = "Angular" progress = {70} />
          <Skills skill = "VueJs" progress = {60} />
          <Skills skill = "NodeJs" progress = {80} />
          <Skills skill = "Python" progress = {60} />
          <Skills skill = "React Native" progress = {70} />
          <Skills skill = "Ionic" progress = {70} />
          <Skills skill = "CSS/HTML" progress = {50} />
          <Skills skill = "GraphQL" progress = {60} />
          <Skills skill = "SQL" progress = {60} />
          <Skills skill = "MongoDB" progress = {60} />
        </Cell>
      </Grid>
    </div>
  );
}

export default Aboutme;