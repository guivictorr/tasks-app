import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import formatDate from '../../services/formatDate';
import api from '../../services/api';

import BackButton from '../../components/BackButton';

import { Container } from './styles';

interface RouteParamsProps {
  id: string;
}

interface TaskProps {
  title: string;
  description: string;
  created_at: string;
  id: number;
}

const Task: React.FC = () => {
  const [task, setTask] = useState<TaskProps[]>([])
  const { id } = useParams<RouteParamsProps>()

  async function handleGetTask() {
    const response = await api.get(`/tasks/${id}`)
    const data = response.data

    setTask([data])
  }

  useEffect(() => {
    handleGetTask()
  }, [])

  return (
    <Container>
      <header>
        <BackButton/>
      </header>

      {task.map(item => (
        <main key={id}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>

          <footer>
            <p><strong>Criada em:</strong>{formatDate(item.created_at)}</p>
            <Link to={`/edit/${item.id}`}>
              Editar
            </Link>
          </footer>
        </main>
      ))}
    </Container>
  );
}

export default Task;