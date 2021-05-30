import {React, useEffect, useState}from 'react'
import { makeStyles } from '@material-ui/core/styles';

import {  Typography,Grid, Paper, FormLabel,FormControl,FormControlLabel,RadioGroup,Radio}from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    selectorSection:{
      width:'90%',
      marginBottom:'10px  !important',
      backgroundColor:'#f9f6ff',
    },
    inputField:{
      width: '90%',
    },
    checkBoxGrid:{
      // overflowY : 'auto',
      margin: '2%'
    },
    markAsComplete:{
      color:'#56d68b',
      cursor:'pointer',
      "&:hover": {
        color:'#f50057',
      }
      // backgroundColor:'black',
    },
    tagContainer:{
      color:'#9e87e9',
      backgroundColor:'#ede8fb',
      margin:'10px',
      cursor:'pointer',
    }
}));

function SingleSelectorBlock({todoData,selectedValue,clickedMarkAscompleted,inprocessTodoData,disabled,handleTagClick}) {
  // let [todo,changeTodo]=useState('');
  // let [tags,changeTags]=useState([]);
  //   useEffect(()=>{
  //     if(todoData.todo){
  //     let arr=todoData.todo.split('#');
  //     changeTodo(arr[0]);
  //     arr.shift();

  //     changeTags(arr)
  //     console.log(arr)
  //     }
  //   },[todoData,inprocessTodoData])
    const classes = useStyles();
    const markAscompleted=()=>{
      clickedMarkAscompleted()
      console.log(selectedValue)
    }
    // const onClickTag=(tag)=>{
    //   handleTagClick(tag)
    // }
    return(
        <Paper className={classes.selectorSection} >
            <FormControlLabel  value={todoData.key} control={<Radio />} label={todoData.todo} disabled={disabled}/>
            {todoData.tags.map((tag,i)=><Typography variant="subtitle1" className={classes.tagContainer} 
                                          align='center' display="inline" key={i} onClick={()=>handleTagClick(tag)}>
                                          #{tag}
                                        </Typography>)
            }
            
            {selectedValue===todoData.key && !disabled &&<Typography variant="subtitle1" className={classes.markAsComplete} 
                                                          align='center' color='secondary' onClick={markAscompleted} >
                                                          Mark as completed
                                                        </Typography>
            }
        </Paper>
    )
}

export default SingleSelectorBlock;