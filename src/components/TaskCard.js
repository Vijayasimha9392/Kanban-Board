import React from 'react';
import { useDrag } from 'react-dnd';
import { Card, CardContent, Typography } from '@mui/material';

const TaskCard = ({ id, title, description }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Card
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        margin: '8px',
        cursor: 'move',
        maxWidth: '300px', // Increase the width of the cards
        width: '100%', // Ensure it takes full width available
      }}
    >
      <CardContent>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
