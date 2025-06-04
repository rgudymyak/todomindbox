import { Button, Input } from '@mui/material';
import React from 'react';

interface HeaderProps {
  newTaskTitle: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addTask: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  newTaskTitle,
  handleInputChange,
  addTask,
}) => {
  return (
    <div className='flex flex-col items-center'>
      <h1>To-Do List</h1>
      <div className='flex justify-center flex-row w-[100%] gap-5'>
        <div>
          <Input
            type='text'
            value={newTaskTitle}
            onChange={handleInputChange}
          />
        </div>
        <Button color='inherit' size='small' variant='text' onClick={addTask}>
          Add Task
        </Button>
      </div>
    </div>
  );
};
