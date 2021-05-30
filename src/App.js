import './App.css';
import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper, TextField, FormLabel,FormControl,FormControlLabel,RadioGroup,Radio, Hidden}from '@material-ui/core';
import { ReactComponent as ResetIcon } from './resetIcon.svg';
import Bottomblock from './components/bottomBlock/Bottomblock';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight:'80vh',
  },
  paperReset:{
    color:'#56d68b',
    position: 'relative',
    width:'120px',
    paddingInline:'24px',
    borderRadius:'40px',
    cursor:'pointer',
    "&:hover": {
      // backgroundColor:'#e9f9f0',
      backgroundColor:'#dffdff',
      boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
    }
    // height:'30px',
  },
  selectorSection:{
    width:'90%',
  },
  inputField:{
    width: '90%',
  },
  checkBoxGrid:{
    // overflowY : 'auto',
    margin: '2%'
  }
}));



function App() {
  const classes = useStyles();
  const [inprocessTodoData,changeInprocessTodoData]=useState([]);
  const [completedTodoData,changeCompletedTodoData]=useState([]);
  const [inputData,changeInputData]=useState('');
  const [todoIndex,changeTodoIndex]=useState(0);
  const [selectedValue,changeSelectedValue]=useState('')

  useEffect(()=>{
    // console.log(inprocessTodoData.length===0 , completedTodoData.length===0)

    if(inprocessTodoData.length===0 && completedTodoData.length===0){
      console.log('bye')
      let localSTInprocessTodoData=JSON.parse(localStorage.getItem('inprocessTodoData'))
      console.log(localSTInprocessTodoData);
      if(localSTInprocessTodoData ){
        changeInprocessTodoData(localSTInprocessTodoData);
      }
      console.log('bye')
      let localSTCompletedTodoData=JSON.parse(localStorage.getItem('completedTodoData'))
      if(localSTCompletedTodoData){
        changeCompletedTodoData(localSTCompletedTodoData);
      }
      let localSTTodoIndex=JSON.parse(localStorage.getItem('todoIndex'));
      if(localSTTodoIndex){
        changeTodoIndex(localSTTodoIndex);
      }
    }
    else{
      localStorage.setItem('inprocessTodoData',JSON.stringify(inprocessTodoData));
      localStorage.setItem('completedTodoData',JSON.stringify(completedTodoData));
      localStorage.setItem('todoIndex',JSON.stringify(todoIndex));
    }
  },[inprocessTodoData,completedTodoData])

  const handleSubmit=(e)=>{
    e.preventDefault();
    // changeInprocessTodoData({...inprocessTodoData,[todoIndex+1]:{todo:inputData}});
    let splitArr=inputData.split('#');
    let inputTodo=splitArr[0];
    splitArr.shift();
    changeInprocessTodoData([{key:todoIndex+1 ,todo:inputTodo, tags:splitArr},...inprocessTodoData]);

    changeTodoIndex(todoIndex+1);
    changeInputData('')
  }
  const changeInputDataFun=(e)=>{
    changeInputData(e.target.value)
  }
  const handelReset=(e)=>{
    localStorage.clear();
    changeTodoIndex(0);
    changeCompletedTodoData([]);
    changeInprocessTodoData([]);
    changeSelectedValue('')
  }

  return (
    // <div className={classes.root}>
    <Grid container spacing={3} spacing={0}
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <Typography variant="h4" align='left' >
              To do list
            </Typography>
            <Grid  align='right'>
              <Paper className={classes.paperReset} align='right' elevation={0} onClick={handelReset}>
                <ResetIcon display="inline"/>
                <Typography variant="subtitle1" display="inline" >
                  Reset all tasks
                </Typography>
              </Paper>
            </Grid>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField id="standard-search" className={classes.inputField} label="+ Add a task" value={inputData} onChange={changeInputDataFun} type="input" />
            </form>

            <Bottomblock changeInprocessTodoData={changeInprocessTodoData} 
              inprocessTodoData={inprocessTodoData} 
              completedTodoData={completedTodoData} 
              changeCompletedTodoData={changeCompletedTodoData} 
              selectedValue={selectedValue} 
              changeSelectedValue={changeSelectedValue}
            ></Bottomblock>

          </Paper>
        </Grid>  
    </Grid>

 // </div> 
    
  );
}

export default App;
