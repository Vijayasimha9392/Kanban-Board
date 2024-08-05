import React from 'react';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './Column';
import AddTaskForm from './AddTaskForm';
import SearchBar from './SearchBar';

const KanbanBoard = () => {
  const tasks = useSelector((state) => state.tasks);
  const searchQuery = useSelector((state) => state.searchQuery);
  const columns = ['To Do', 'In Progress', 'Peer Review', 'Done'];

  const getTasksForColumn = (column) =>
    tasks.filter((task) => task.status === column && task.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <SearchBar />
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
          {columns.map((column) => (
            <Column key={column} title={column} tasks={getTasksForColumn(column)} />
          ))}
        </div>
        <AddTaskForm />
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;
