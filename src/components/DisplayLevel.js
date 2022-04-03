import React from 'react'
import DisplayNode from "./DisplayNode.js"
import Grid from '@mui/material/Grid';
import TreeItem from '@mui/lab/TreeItem';
function DisplayLevel(props) {
    function returnNodes(){
        let res=[]
        for(let j of props.data){
            res.push(<DisplayNode data={j} depth={props.depth}/>)
        }
        return res
    } 
  return (
    <TreeItem  nodeId={props.depth+1*100} label={ 
            <Grid mt={2} ml={2} mb={4} alignItems="center" justifyContent="center" container spacing={1} sx={{backgroundColor:"#fff",width:"95%"}} >
                {returnNodes()}
            </Grid>
    } />
  )
}

export default DisplayLevel