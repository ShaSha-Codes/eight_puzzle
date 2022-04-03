import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { nanoid } from 'nanoid'
function DisplayNode(props) {


  function valueSetter(){
    let res=[]
    for(let k of props.data){
      res.push( 
        <tr key={nanoid(10)} >
            <td >
              {k[0]===0?"":k[0]}
            </td>
            <td>
              {k[1]===0?"":k[1]}
            </td>
            <td>
              {k[2]===0?"":k[2]}
            </td>
        </tr>)
    }
    return res
  }

  function FN(){
    let test_goal=[[1,2,3],[4,5,6],[7,8,0]]
    let incorrectness=0
    for(let i=0;i<3;i++){
      for(let j=0;j<3;j++){
        if(test_goal[i][j]!=props.data[i][j]){
          incorrectness+=1
        }
      }
    }
    return incorrectness+props.depth
  }

  return (
    <Box m={3}>
        <table>
            
              <tbody>
                {valueSetter()}
              </tbody>
            

        </table>
        {props.depth!==undefined &&
            <Typography sx={{textAlign:"center", marginTop:"1em"}}component="h2" variant="h6">
            F(N)={FN()}
          </Typography>
        }
        
    </Box>
  )
}

export default DisplayNode