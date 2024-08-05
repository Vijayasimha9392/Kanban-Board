import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Fab, Select, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const AddTaskForm = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [column, setColumn] = useState('To Do');
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTask = () => {
    if (title && description) {
      dispatch(addTask(title, description, column));
      setTitle('');
      setDescription('');
      setColumn('To Do');
      handleClose();
    }
  };

  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen} style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Task Description"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Select
            value={column}
            onChange={(e) => setColumn(e.target.value)}
            fullWidth
            margin="dense"
          >
            <MenuItem value="To Do">To Do</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Peer Review">Peer Review</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddTask} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddTaskForm;
