import Task from './Task';
/* eslint-disable */
const Tasks = ({ tasks, onDelete, onToggle }) => (
  <>
    {tasks.map((task, index) => (
      <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
    ))}
  </>
);

export default Tasks;
