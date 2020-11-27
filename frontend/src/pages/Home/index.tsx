import React, { useState, useEffect, FormEvent } from 'react';

import api from '../../services/api';

import { Container, Error } from './styles';

import Loading from '../../components/Loading';
import TaskItem from '../../components/TaskItem';

interface TasksProps {
  id: string;
  title: string;
  finished: boolean;
  description: string;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<TasksProps[]>();
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [inputError, setInputError] = useState('');

  async function getTasks() {
    const { data } = await api.get('/tasks');
    setTasks([...data]);
  }

  async function handleSubmitPost(event: FormEvent) {
    event.preventDefault();

    if (!newTaskTitle || !newTaskDescription) {
      setInputError('Todos os campos precisam estar preenchidos');
      return;
    }

    try {
      await api.post('/tasks', {
        title: newTaskTitle,
        description: newTaskDescription,
      });

      getTasks();
      setNewTaskTitle('');
      setNewTaskDescription('');
      setInputError('');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTasks();
  }, [tasks]);

  if (!tasks) {
    return <Loading />;
  }

  return (
    <Container hasError={Boolean(inputError)}>
      <header>
        <form onSubmit={handleSubmitPost}>
          <label htmlFor="title">
            <p>Título</p>
            <input
              placeholder="O que devo fazer ?"
              id="title"
              type="text"
              value={newTaskTitle}
              onChange={event => setNewTaskTitle(event.target.value)}
            />
          </label>
          <label htmlFor="description">
            <p>Descrição</p>
            <textarea
              placeholder="Descrição"
              id="description"
              value={newTaskDescription}
              onChange={event => setNewTaskDescription(event.target.value)}
            />
          </label>
          <button type="submit">Criar</button>
          {inputError && <Error>{inputError}</Error>}
        </form>
      </header>

      <section>
        {tasks.map(task => (
          <TaskItem
            id={task.id}
            finished={task.finished}
            title={task.title}
            description={task.description}
          />
        ))}
      </section>
    </Container>
  );
};

export default Home;
