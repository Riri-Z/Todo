import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


import Grid from '@material-ui/core/Grid'
import AddTaskComponent from './tasks/AddTask';
import TaskListComponent from './tasks/TasksList';
import styled from 'styled-components';

const Background = styled.div`

background-repeat: no-repeat;
background-size: auto;
`

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),

  },

}));

const TodoListComponent = () => {

  const classes = useStyles();

  return (
    <Background className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AddTaskComponent></AddTaskComponent>
        </Grid>
        <Grid item xs={12} >
          <TaskListComponent></TaskListComponent>
        </Grid>
      </Grid>
    </Background>
  );
}

export default TodoListComponent;