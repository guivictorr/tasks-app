import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import formatDate from '../../services/formatDate';
import api from '../../services/api';

import BackButton from '../../components/BackButton';
import Loading from '../../components/Loading';

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
  const [task, setTask] = useState<TaskProps>()
  const { id } = useParams<RouteParamsProps>()

  async function handleGetTask() {
    const { data } = await api.get(`/tasks/${id}`)
    data.created_at = formatDate(data.created_at)
    setTask(data)
  }

  useEffect(() => {
    handleGetTask()
  }, [])

  if(!task) {
    return <Loading />
  }

  return (
    <Container>
      <header>
        <BackButton/>
      </header>
      <main key={id}>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <footer>
          <p><strong>Criada em:</strong>{task.created_at}</p>
          <Link to={`/edit/${task.id}`}>
            Editar
          </Link>
        </footer>
      </main>
    </Container>
  );
}

export default Task;