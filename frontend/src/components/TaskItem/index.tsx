import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiCheck } from 'react-icons/fi';

import api from '../../services/api';

import { TaskItemContainer } from './styles';

interface TaskItemProps {
  id: string;
  finished: boolean;
  title: string;
  description: string;
}

const TaskItem: React.FC<TaskItemProps> = ({
  id,
  finished,
  title,
  description,
}) => {
  async function handleDeleteTask() {
    try {
      await api.delete(`/tasks/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleFinishTask() {
    try {
      await api.patch(`/tasks/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TaskItemContainer key={id} finished={finished}>
      <div>
        <h1>{title}</h1>
        <Link to={`/task/${id}`}>Visit</Link>
      </div>
      <p>{description}</p>
      <footer>
        <main className="buttons">
          {finished || (
            <button
              className="finish-button"
              type="button"
              onClick={handleFinishTask}
            >
              <FiCheck color="#fff" size={20} />
            </button>
          )}
          <button
            className="delete-button"
            type="button"
            onClick={handleDeleteTask}
          >
            <FiTrash2 color="#fff" size={20} />
          </button>
        </main>
      </footer>
    </TaskItemContainer>
  );
};

export default TaskItem;
