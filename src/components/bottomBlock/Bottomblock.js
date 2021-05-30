import {React, useEffect, useState}from 'react'
import { makeStyles } from '@material-ui/core/styles';

import {  Grid, Paper, FormLabel,FormControl,FormControlLabel,RadioGroup,Typography}from '@material-ui/core';
import SingleSelectorBlock from './SingleSelectorBlock';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
    selectorSection:{
      width:'90%',
    },
    inputField:{
      width: '90%',
    },
    checkBoxGrid:{
      // overflowY : 'auto',
      margin: '2%',
      marginTop:'20px',
    },
    completedLable:{
      marginTop:'30px',
      marginBottom:'10px',
    },
    tagContainer:{
      color:'#9e87e9',
      backgroundColor:'#ede8fb',
      margin:'10px',
      cursor:'pointer',
      width: 'fit-content',
      padding: '3px'
    },
    filterGrid:{
      paddingBottom:'15px',
    }
}));

function Bottomblock({inprocessTodoData,changeInprocessTodoData,changeCompletedTodoData,completedTodoData,selectedValue,changeSelectedValue}) {
    const classes = useStyles();
    let [filter,chageFilter]=useState('');
    let [tag,chanageTag]=useState('');

    let onChangeHandler=(e)=>{
        changeSelectedValue( parseInt(e.target.value))
    }

    // useEffect(()=>{
    //     if(inprocessTodoData){
    //         for(const key in inprocessTodoData){
    //           changeRadioButtonBlock([...radioButtonBlock,{...inprocessTodoData[key],key:key}])
    //           // radioButtonBlock.push({...inprocessTodoData[key],key:key})
    //         }
    //         radioButtonBlock.map(item=>
    //           console.log(<SingleSelectorBlock key={item.key}/>))
    //     }
    // },[inprocessTodoData])
    let clickedMarkAscompleted=()=>{
      let newInprocessTodoData=inprocessTodoData
      changeCompletedTodoData([...inprocessTodoData.filter(item=>item.key===selectedValue),...completedTodoData,])
      // console.log(inprocessTodoData.filter(item=>item.key!==selectedValue))
      changeInprocessTodoData(inprocessTodoData.filter(item=>item.key!==selectedValue))
    }
    const handleTagClick=(tag)=>{
      // inprocessTodoData.map(item=>{item.tags.map(tagItem=>tagItem===tag?console.log(item):null)});
      chanageTag(tag)
      chageFilter(inprocessTodoData.filter(item=>item.tags.find(tagItem=>tagItem==tag)))
    }
    const clearFilter=()=>{
      chageFilter('');
      chanageTag('')
    }

    
    return(
        <Grid align='left' className={classes.checkBoxGrid} >
          {filter&&<Grid className={classes.filterGrid} >
          <Typography variant="subtitle1" className={classes.tagContainer} display="inline"
                          align='left' color='secondary' >
                          #{tag}
                        </Typography>
                        <CancelIcon color="secondary" onClick={clearFilter} cursor={'pointer'}>cancel</CancelIcon></Grid>
                        }
              {/* <CancelIcon>cancel</CancelIcon> */}
              <FormControl component="fieldset" >
              <FormLabel className={classes.completedLable} component="legend">{inprocessTodoData.length!==0?'In-Complete Tasks':'No Pending Tasks'}</FormLabel>
                <RadioGroup value={selectedValue} onChange={onChangeHandler}>
                  {/* <SingleSelectorBlock/> */}
                  {filter&&filter.map(item=><SingleSelectorBlock 
                    key={item.key} 
                    clickedMarkAscompleted={clickedMarkAscompleted}
                    todoData={item} 
                    handleTagClick={handleTagClick}
                    inprocessTodoData={inprocessTodoData}
                    selectedValue={selectedValue}/>)}

                  {!filter&&inprocessTodoData.map(item=><SingleSelectorBlock 
                    key={item.key} 
                    clickedMarkAscompleted={clickedMarkAscompleted}
                    todoData={item} 
                    handleTagClick={handleTagClick}
                    inprocessTodoData={inprocessTodoData}
                    selectedValue={selectedValue}/>)}
                    
                  {!filter&&completedTodoData.length!==0&&<FormLabel className={classes.completedLable} component="legend">Completed Tasks</FormLabel>}
                  {!filter&&completedTodoData.map(item=><SingleSelectorBlock 
                    key={item.key} 
                    clickedMarkAscompleted={clickedMarkAscompleted} 
                    disabled={true}
                    todoData={item} 
                    handleTagClick={handleTagClick} 
                    inprocessTodoData={inprocessTodoData}
                    selectedValue={selectedValue}/>)}
                </RadioGroup>
              </FormControl>
            </Grid>
    )
}

export default Bottomblock