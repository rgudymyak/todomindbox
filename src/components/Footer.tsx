import { Button } from '@mui/material';
import type { Task } from '../types';
import React from 'react';

interface FooterProps {
  tasks: Task[];

  currentFilter: string;
  handleFilterClick: (currentFilter: string) => void;
  clearCompletedTask: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  tasks,
  handleFilterClick,
  clearCompletedTask,
}) => {
  const activeTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className='flex justify-between items-center'>
      <div className='text-[#424141]'>{activeTasks} items left</div>
      <div className='flex flex-row'>
        <Button
          color='inherit'
          size='small'
          onClick={() => handleFilterClick('All')}
        >
          All
        </Button>
        <Button
          color='inherit'
          size='small'
          onClick={() => handleFilterClick('Active')}
        >
          Active
        </Button>
        <Button
          color='inherit'
          size='small'
          onClick={() => handleFilterClick('Completed')}
        >
          Completed
        </Button>
      </div>
      <div>
        <Button color='inherit' size='small' onClick={clearCompletedTask}>
          Clear completed
        </Button>
      </div>
    </div>
  );
};
