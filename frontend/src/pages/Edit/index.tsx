import React, { FormEvent, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import api from '../../services/api';

import Loading from '../../components/Loading';

import { Container, Error } from './styles';

interface RouteParamsProps {
  id: string;
}

interface TaskProps {
  title: string;
  description: string;
}

const Edit: React.FC = () => {
  const [task, setTask] = useState<TaskProps>();
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [inputError, setInputError] = useState('');
  const { id } = useParams<RouteParamsProps>();
  const { goBack } = useHistory();

  async function handleEditTask(event: FormEvent) {
    event.preventDefault();

    if (!newTaskTitle || !newTaskDescription) {
      setInputError('Todos os campos precisam estar preenchidos');
      return;
    }

    try {
      await api.put(`/tasks/${id}`, {
        title: newTaskTitle,
        description: newTaskDescription,
      });

      setNewTaskTitle('');
      setNewTaskDescription('');
      setInputError('');
      goBack();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleGetData() {
    const { data } = await api.get(`/tasks/${id}`);
    setTask(data);
    setNewTaskTitle(data.title);
    setNewTaskDescription(data.description);
  }

  useEffect(() => {
    handleGetData();
  }, []);

  if (!task) {
    return <Loading />;
  }

  return (
    <Container hasError={Boolean(inputError)}>
      <header>
        <form onSubmit={handleEditTask}>
          <label htmlFor="title">
            <p>Título</p>
            <input
              placeholder={task?.title}
              id="title"
              type="text"
              value={newTaskTitle}
              onChange={event => setNewTaskTitle(event.target.value)}
            />
          </label>
          <label htmlFor="description">
            <p>Descrição</p>
            <textarea
              placeholder={task?.description}
              id="description"
              value={newTaskDescription}
              onChange={event => setNewTaskDescription(event.target.value)}
            />
          </label>
          <button type="submit">Editar</button>
        </form>
      </header>

      {inputError && <Error>{inputError}</Error>}
    </Container>
  );
};

export default Edit;
