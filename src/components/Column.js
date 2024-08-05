import React from 'react';
import { useDrop } from 'react-dnd';
import TaskCard from './TaskCard';
import { useDispatch } from 'react-redux';
import { moveTask } from '../redux/actions';
import { Paper, Typography } from '@mui/material';
import AddTaskForm from './AddTaskForm';

const Column = ({ title, tasks }) => {
  const dispatch = useDispatch();

  const [, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => {
      dispatch(moveTask(item.id, title));
    },
  });

  return (
    <Paper ref={drop} style={{ padding: '16px', width: '250px', minHeight: '400px', margin: '8px' }}>
      <Typography variant="h6">{title}</Typography>
      {tasks.map((task) => (
        <TaskCard key={task.id} id={task.id} title={task.title} description={task.description} />
      ))}
      <AddTaskForm column={title} />
    </Paper>
  );
};

export default Column;
