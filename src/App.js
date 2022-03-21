import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tile from './components/Tile';
import Button from '@mui/material/Button';
import _ from "lodash"

import { v4 } from 'uuid';


function App() {

  const [realRoot, setRealRoot] = React.useState([[1,8,2],[0,4,3],[7,6,5]]);
  const [path,setPath]=React.useState(0)
  const [iterator,setIterator]=React.useState(-1)
  React.useEffect(()=>{
    if(iterator>-1){
        setTimeout(()=>{
          setRealRoot(path[iterator])
          setIterator(prevIterator=>prevIterator-1)
        }, 1500)
    }
  },[iterator])
  //Class
  class Node
  {
      constructor(data){
          this.data = data;
          this.parent = null;
          this.child = [];
      }


      add_child(child){
        this.child.push(child)
        child.parent=this
      }
        
    
      print_tree(depth=1){
        console.log(this.data)
        for(let i of this.child){
            i.print_tree(depth+1)
        }
    }
  }
    //Functions 

    function heuristic_funtion(state){
      let incorrect=0
      for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
          if(state[i][j]!=goal.data[i][j]){
            incorrect+=1
          }
        }
      }
      return incorrect
    }

   function children(parent){
      let temp=[]
      let lowest_val=null
      let x=0
      let y=0

      function dry(){
            let next_state

            next_state=JSON.parse(JSON.stringify(parent.data))
            let temp_var=next_state[x][y]
            next_state[x][y]=next_state[temp_x][temp_y]
            next_state[temp_x][temp_y]=temp_var
            let temp_val=heuristic_funtion(next_state)
            if(lowest_val==null || lowest_val==temp_val){
                lowest_val=temp_val
                temp.push(next_state)
              }
              else if(temp_val<lowest_val){
                lowest_val=temp_val
                temp=[next_state]
              }
            }




      for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(parent.data[i][j]==0){
                x=i
                y=j
            }
          }
        }
      let temp_x=x-1
      let temp_y=y
      if(temp_x>-1){
          dry()
        }
        


    temp_x=x
    temp_y=y+1
    if(temp_y<3){
        dry()
    }


    temp_x=x+1
    temp_y=y
    if(temp_x<3){
      dry()
    }
        

    temp_x=x
    temp_y=y-1
    if(temp_y>-1){
      dry()
    }
        

    for(let j of temp){
      if(!(String(j) in duplicate)){
            duplicate[String(j)]=1
            let new_node=new Node(j)
            parent.add_child(new_node)
          }
    }
   
    for(let k of parent.child){
        queue.push(k)
        
        if(String(k.data)==String(goal.data)){
          return k
          
        }
      }
    }


    let goal=new Node([[1,2,3],[4,5,6],[7,8,0]])
    let duplicate={}
    let root=new Node([[1,8,2],[0,4,3],[7,6,5]])
    let queue=[root]


    function path_finder(){
      while(queue.length>=1){
        let temp_node=queue.shift()
        let test=children(temp_node)
        let res=[]
        if(test!=undefined){
            while(test!=null){
              res.push(test.data)
              test=test.parent
            }
            setPath(res)
            setIterator(res.length-1)
            break
          }
          
        }
    }
    

    function tile_maker(){
      let res=[]
      for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
          res.push(<Tile value={realRoot[i][j]} key={v4()}/>)
        }
      }
      return res
    }
    
    function randomizer(){
      const test_cases=[
          [[1,8,2],[0,4,3],[7,6,5]],
          [[1,2,3],[0,4,6],[7,5,8]]


      ]
      setRealRoot(test_cases[Math.floor(Math.random() * 2)])
    }

    function solver(){
      root.data=JSON.parse(JSON.stringify(realRoot))
      path_finder()
    }

    // function tester(){
      
    //     console.log("CCOOOOL")
    //     setTestRoot((prevNode)=>{
    //         if(String(prevNode)==String([[1,8,2],[0,4,3],[7,6,5]])){
    //           return [[1,2,3],[4,5,6],[7,8,0]]
    //         }else{
    //           return [[1,8,2],[0,4,3],[7,6,5]]
    //         }
    //     })
      
    // }
    // React.useEffect(()=>tester(),[0])
    
   
  return (
    <Grid container marginTop={10} direction="column" alignItems="center" justifyContent="center">
      <Box sx={{width:"600px",height:"600px",backgroundColor: "#b1bfd8",
backgroundImage:"linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%)",borderRadius:"50px"}}>
        <Grid container marginTop={10} direction="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" component="h1" sx={{marginBottom:"20px"}}>
              8 - Puzzle (IDA*)
          </Typography>
          <Box sx={{width:"400px"}}>
            <Grid mt={2} ml={2} mb={4} container spacing={1} sx={{ width:"100%"}} >
              {tile_maker()}
              
              
            </Grid>
          </Box>
          <Button size="large" variant="contained" color="secondary" onClick={randomizer} sx={{width:"200px",height:"40px", fontSize:"20px", margin:"10px"}}>
            Randomize
          </Button>
          <Button size="large" variant="contained" onClick={solver}sx={{width:"200px",height:"40px", fontSize:"20px"}}>
            Solve
          </Button>
        </Grid>
      </Box>
    </Grid>
  )
}

export default App