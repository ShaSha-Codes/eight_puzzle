import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function Tile(props) {
  return (
    
        <Grid item xs={4}>
                <Paper elevation={6} rounded sx={{width:"80px",height:"80px"}}>
                    <Typography variant="h4" component="h1" align="center" component={Stack}>
                        {props.value}
                    </Typography>
                </Paper>
        </Grid>

  )
}

export default Tile