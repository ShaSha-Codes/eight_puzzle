import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tile from './components/Tile';
import Button from '@mui/material/Button';

function App() {
  return (
    <Grid container marginTop={10} direction="column" alignItems="center" justifyContent="center">
      <Box sx={{width:"600px",height:"600px",backgroundColor:"lightblue",borderRadius:"50px"}}>
        <Grid container marginTop={10} direction="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" component="h1" sx={{marginBottom:"20px"}}>
              8 - Puzzle (IDA*)
          </Typography>
          <Box sx={{width:"400px"}}>
            <Grid mt={2} ml={2} mb={6} container spacing={1} sx={{ width:"100%"}} >
              <Tile value={1}/>
              <Tile value={2}/>
              <Tile value={3}/>
              <Tile value={4}/>
              <Tile value={0}/>
              <Tile value={5}/>
              <Tile value={6}/>
              <Tile value={7}/>
              <Tile value={8}/>
              
              
            </Grid>
          </Box>
          <Button size="large" variant="contained" sx={{width:"200px",height:"40px", fontSize:"20px"}}>
            Solve
          </Button>
        </Grid>
      </Box>
    </Grid>
  )
}

export default App