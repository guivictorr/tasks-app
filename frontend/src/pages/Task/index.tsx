import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link, useParams, useHistory } from 'react-router-dom';

import formatDate from '../../services/formatDate';
import api from '../../services/api';

import { Container } from './styles';

interface RouteParamsProps {
  id: string;
}

interface TaskProps {
  title: string;
  description: string;
  created_at: string;
}

const Task: React.FC = () => {
  const [task, setTask] = useState<TaskProps[]>([])
  const { id } = useParams<RouteParamsProps>()
  const { goBack } = useHistory()

  async function handleGetTask() {
    const response = await api.get(`/tasks/${id}`)
    const data = response.data

    setTask([data])
  }

  function handleGoBack(){
    goBack()
  }

  useEffect(() => {
    handleGetTask()
  }, [])

  return (
    <Container>
      <header>
        <button onClick={handleGoBack}>
          <IoIosArrowRoundBack color="#fff" size={50}/>
          <p>Voltar</p>
        </button>
      </header>

      {task.map(item => (
        <main key={id}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>

          <footer>
            <p><strong>Criada em:</strong>{formatDate(item.created_at)}</p>
            <Link to={`/task/edit/${id}`}>
              Editar
            </Link>
          </footer>
        </main>
      ))}
    </Container>
  );
}

export default Task;