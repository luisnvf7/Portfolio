import React from 'react';

import { Grid, Cell } from 'react-mdl'

const Education = ({ startYear, finalYear, shoolName, shoolDescription}) => {
    return ( 
        <Grid>
            <Cell col = {4}>
                <p>{startYear} - {finalYear}</p>
            </Cell>
            <Cell col = {8}>
                <h4 style = {{marginTop: '0px'}}>{shoolName}</h4>
                <p>{shoolDescription}</p>
            </Cell>
        </Grid>
     );
}
 
export default Education;