import React from 'react';
import TaskItem from './TaskItem';
import type { Task } from '../types';
import { Footer } from './Footer';
import { Header } from './Header';

export const TaskList = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = React.useState('');
  const [currentFilter, setCurrentFilter] = React.useState<string>('All');

  const addTask = () => {
    if (!newTaskTitle.trim()) return;
    const newTask: Task = {
      id: `${tasks.length}`,
      title: newTaskTitle,
      completed: false,
    };
    setTasks((prevTask) => [newTask, ...prevTask]);
    setNewTaskTitle('');
  };

  const toggleTask = (id: string) => {
    setTasks((prevTask) =>
      prevTask.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.target.value);
  };

  const handleFilterClick = (currentFilter: string) => {
    setCurrentFilter(currentFilter);
  };

  const filteredTasks = () => {
    switch (currentFilter) {
      case 'Completed':
        return tasks.filter((task) => task.completed);
      case 'Active':
        return tasks.filter((task) => !task.completed);
      case 'All':
      default:
        return tasks;
    }
  };

  const clearCompletedTask = () => {
    setTasks((prevTask) => prevTask.filter((task) => !task.completed));
  };
  return (
    <div className='flex flex-col justify-between min-h-[40vh] bg-white border rounded shadow overflow-auto'>
      <div className='justify-center mt-5'>
        <Header
          newTaskTitle={newTaskTitle}
          handleInputChange={handleInputChange}
          addTask={addTask}
        />
        <ul>
          {filteredTasks().map((task) => (
            <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
          ))}
        </ul>
      </div>
      <div className='p-2'>
        <Footer
          tasks={tasks}
          currentFilter={currentFilter}
          handleFilterClick={handleFilterClick}
          clearCompletedTask={clearCompletedTask}
        />
      </div>
    </div>
  );
};

export default TaskList;
