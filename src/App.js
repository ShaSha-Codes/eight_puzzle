import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tile from './components/Tile';
import Button from '@mui/material/Button';

function App() {

  
  function IDAStar(){
    let lowestVal=9000
    let finalState=[[1,2,3],[4,0,5],[6,7,8]]
    let test_case=[[1,3,5],[4,0,2],[6,7,8]]
    let x=0,y=0
    let prevAns=[]
    prevAns.push(test_case)
    let ans=[]
    let testing=[]
    let flag=0
    let depth=0
    let tempX=0
    let tempY=0
    function checker(checkable){
      let counter=0
      for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
          if(checkable[i][j]!=finalState[i][j]){
              counter+=1
          }
        }
      }
      return counter
    }

    function tileMover(k){
      let tempTest=JSON.parse(JSON.stringify(prevAns[k]))
          let tempVar=tempTest[tempX][tempY]
          tempTest[tempX][tempY]=tempTest[x][y]
          tempTest[x][y]=tempVar
          let testing=checker(tempTest)+depth
          if(testing<lowestVal){
            ans=tempTest
            lowestVal=testing
          }else if(testing==lowestVal){
            ans.push(tempTest)
          }

    }



    

    while(true){
      depth+=1
      lowestVal=9000
      for(let k=0;k<prevAns.length;k++){

        //For Finding position of 0
        for(let i=0;i<3;i++){
          for(let j=0;j<3;j++){
            if(test_case[i][j]==0){
                x=i
                y=j
            }
          }
        }

        console.log(prevAns[k])
        //Ending Condition
        if(checker(prevAns[k])==0){
          console.log("Work Successful")
          flag=1
          break
        }

        tempX=x-1
        tempY=y
        if(tempX>-1){
          tileMover(k)
        }

        tempX=x
        tempY=y+1
        if(tempY<3){
          tileMover(k)
        }

        tempX=x+1
        tempY=y
        if(tempX<3){
          tileMover(k)
        }

        tempX=x
        tempY=y-1
        if(tempY>-1){
          tileMover(k)
        }




      }
      prevAns=JSON.parse(JSON.stringify(ans))
      break




    }



  }

  IDAStar()

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