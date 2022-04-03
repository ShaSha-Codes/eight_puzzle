import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tile from './components/Tile';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import './style.css'
import { v4 } from 'uuid';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import DisplayLevel from './components/DisplayLevel';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';
import ListItemButton from '@mui/material/ListItemButton';
import DisplayNode from './components/DisplayNode';



function App() {
  
  const [realRoot, setRealRoot] = React.useState([[1,8,2],[0,4,3],[7,6,5]]);
  const [path,setPath]=React.useState(0)
  const [tree,setTree]=React.useState(0)
  const [visible,setVisible]=React.useState(0)
  const [iterator,setIterator]=React.useState(-1)
  React.useEffect(()=>{
    if(iterator>-1){
        setTimeout(()=>{
          setRealRoot(path[iterator])
          setIterator(prevIterator=>prevIterator-1)
        }, 500)
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
        
    
      
  }
    //Functions 

    function heuristic_funtion(state){
      let incorrect=0
      for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
          if(state[i][j]!==goal.data[i][j]){
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
            if(lowest_val===null || lowest_val===temp_val){
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
            if(parent.data[i][j]===0){
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
        
        if(String(k.data)===String(goal.data)){
          return k
          
        }
      }
    }


    let goal=new Node([[1,2,3],[4,5,6],[7,8,0]])
    let duplicate={}
    let root=new Node([[1,8,2],[0,4,3],[7,6,5]])
    let queue=[root]






//////WORKING HERERERERERERERER



    function path_finder(){
      while(queue.length>=1){
        let temp_node=queue.shift()
        let test=children(temp_node)
        let res=[]
        console.log("TESTING")
        if(test!==undefined){
            while(test!==null){
              res.push(test.data)
              test=test.parent
            }
            setPath(res)
            setIterator(res.length-1)
            setVisible(1)
            setTree(()=>{
              let newTree=[]
              for(let i=0;i<res.length;i++){
                newTree.push([])
              }
              function print_tree(incomingNode,depth=0){
                newTree[depth].push(incomingNode.data)
                for(let i of incomingNode.child){
                    print_tree(i,depth+1)
                }
            }
            print_tree(root)

            return newTree
            })
            break
          }
          
        }
    }
    








    function levelDisplayer(){
      if(visible==1){
        let res=[<Typography sx={{color:"black",textAlign:"center",marginBottom:'30px',marginTop:'50px'}}variant="h4" component="h1">Steps</Typography>]
        let counter=0
        for (let i of tree){
          res.push(<TreeItem nodeId={counter} label={<Typography sx={{color:"black",textAlign:"center"}}variant="h5" component="h1">Depth {counter}</Typography>}>
                      <DisplayLevel data={i} depth={counter}/> 
                  </TreeItem>)
          counter+=1
        }
        return res
      }
      return 
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
          [[1,8,2],[0,4,3],[7,6,5]]
  


      ]
      setRealRoot(test_cases[Math.floor(Math.random() * 1)])
    }

    function solver(){
      root.data=JSON.parse(JSON.stringify(realRoot))
      path_finder()
    }

   
  return (
    <Grid container marginTop={10} direction="column" alignItems="center" justifyContent="center">
      <Box sx={{width:"600px",height:"600px",backgroundColor: "#44318D",borderRadius:"50px"}}>
        <Grid container marginTop={10} direction="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" component="h1" sx={{color:"#FFFFFF", marginBottom:"20px"}}>
              8 - Puzzle
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
      <Box mt={4} p={5} sx={{height:"100%",backgroundColor: "#fff",borderRadius:"50px"}}>
        <Typography variant="h3" component="h1" sx={{textAlign:"center",color:"#44318D", marginBottom:"20px"}}>
            8 - Puzzle   
        </Typography>
        <hr/>
        <Grid container spacing={2}>
          <Box ml={5} mr={5} mt={5}>
            <Paper variant="outlined" sx={{borderRadius:"30px",height:"650px",width:"650px"}}>
                <Typography variant="h3" component="h2" sx={{textAlign:"center",color:"#44318D",marginTop:"20px", marginBottom:"20px"}}>
                    Rules:
                </Typography>
                <List>
                  <ListItemButton>
                    <ListItemIcon>
                      <CircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h5" component="p">
                          Given a 3×3 board with 8 tiles (every tile has one number from 1 to 8) and one empty space.
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <CircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h5" component="p">
                         The objective is to place the numbers on tiles to match the final configuration using the empty space.
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <CircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h5" component="p">
                          We can slide four adjacent (left, right, above, and below) tiles into the empty space. 
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <CircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h5" component="p">
                        Desired State:
                          <DisplayNode  data={[[1,2,3],[4,5,6],[7,8,0]]} />

                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </List>
            </Paper>
          </Box>








          <Box ml={5} mr={5} mt={5}>
            <Paper variant="outlined" sx={{borderRadius:"30px",height:"650px",width:"650px"}}>
                <Typography variant="h3" component="h2" sx={{textAlign:"center",color:"#44318D",marginTop:"20px", marginBottom:"20px"}}>
                    Algorithm:
                </Typography>
                <List>
                  <ListItemButton>
                    <ListItemIcon>
                      <CircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h5" component="p">
                           A* algorithm that is widely used in pathfinding and graph traversal, has been used in order to find the desired state.
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <CircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h5" component="p">
                          The main objective of A* is to reduce the heuristic function f(n)=g(n)+h(n) to the minimum and hence choose the nodes.
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <CircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h5" component="p">
                          g(n) is the cost of the path from the start node to the current node.
                          <br/>
                          h(n) is the number of misplaced tiles
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                
                </List>
            </Paper>
          </Box>


        </Grid>
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ marginTop:"2em",flexGrow: 1, width: 1400}}
        >
         

              {levelDisplayer()}

        </TreeView>
        
      </Box>
      
      

    </Grid>
    
  )
}

export default App