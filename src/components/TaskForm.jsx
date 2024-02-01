import { useState } from 'react';
import PropTypes from 'prop-types';
import { collection, addDoc } from 'firebase/firestore';

const TaskForm = ({ db }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      await addDoc(collection(db, 'tasks'), { title });
      setTitle('');
    } catch (error) {
      console.error('Error adding task:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

TaskForm.propTypes = {
  db: PropTypes.object.isRequired,
};

export default TaskForm;
