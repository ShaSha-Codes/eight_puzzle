import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function Tile(props) {
  const styles={
    backgroundColor: props.value===0?"#689f38":"white",
    width:"80px",
    height:"80px"
  }
  return (
        
        <Grid item xs={4}>
                <Paper elevation={6}  rounded={1} sx={styles} component={Stack} direction="column" justifyContent="center">
                    <Typography variant="h4" component="h1" align="center" >
                        {props.value}
                    </Typography>
                </Paper>
        </Grid>

  )
}

export default Tile