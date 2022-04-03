import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function Tile(props) {
  const styles={
    backgroundColor: props.value===0?"#44318D":"white",
    width:"80px",
    height:"80px",
    
  }

  const styles2={
    color: props.value===0?"#44318D":"#2A1541",
  }


  return (
        
        <Grid item xs={4}>
                <Paper elevation={ props.value===0?0:6}  rounded={1} sx={styles} component={Stack} direction="column" justifyContent="center">
                    <Typography sx={styles2} variant="h4" component="h1" align="center" >
                        {props.value}
                    </Typography>
                </Paper>
        </Grid>

  )
}

export default Tile