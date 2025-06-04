// import { TextField } from '@mui/material';
import React from 'react';
import type { Task } from '../types';
import { Checkbox } from '@mui/material';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

interface TaskItemProps {
  task: Task;
  toggleTask: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask }) => {
  return (
    <div>
      <li key={task.id}>
        <Checkbox
          icon={<RadioButtonUncheckedRoundedIcon />}
          checkedIcon={<CheckCircleOutlineOutlinedIcon />}
          checked={task.completed}
          onClick={() => toggleTask(task.id)}
        />
        <span
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            opacity: task.completed ? '50%' : 'unset',
          }}
        >
          {task.title}
        </span>
        <div className='border-b-1 border-[#4d4b4b] w-[100%] opacity-15' />
      </li>
    </div>
  );
};

export default TaskItem;
