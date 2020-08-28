import React from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

const Skills = ({skill, progress}) => {
    return ( 
        <Grid>
            <Cell col = {12}>
                <div style = {{display: 'flex'}}>
                    <h4>{skill}</h4>
                    <ProgressBar style = {{margin: 'auto', width: '75%'}} progress = {progress} />
                </div>
            </Cell>
        </Grid>
    );
}
 
export default Skills;