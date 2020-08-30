import React, { useContext, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import { TaskContext } from '../../contexts/TaskContext';
import { Action } from '../../reducer/TaskReducer';
import { v4 as uuidv4 } from 'uuid';

const AddTaskComponent = () => {

  const { dispatch } = useContext(TaskContext);
  const [description, setDescription] = useState('');

  const onAddTask = (e) => {
    e.preventDefault();

    dispatch({
      type: Action.ADD_TASK,
      task: {
        id: uuidv4(),
        isChecked: false,
        created: new Date(),
        description: description
      }
    });
    setDescription('')
  }

  const onChange = (e) => {
    setDescription(e.target.value)
  }

  return (
    <form onSubmit={onAddTask} >
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center">

        <TextField
          required
          name='myForm'
          label="Add Task"
          variant="outlined"
          size="small"
          value={description}
          onChange={onChange}
        />

      </Grid>
    </form>
  );
}

export default AddTaskComponent;