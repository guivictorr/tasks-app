import React from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useParams } from 'react-router-dom';

import { Container } from './styles';

interface RouteParamsProps {
  id: string;
}

const Task: React.FC = () => {
  const { id } = useParams<RouteParamsProps>()

  return (
    <Container>
      <header>
        <button>
          <IoIosArrowRoundBack color="#fff" size={50}/>
          <p>Voltar</p>
        </button>
      </header>

      <main>
        <h1>Tírulo</h1>
        <p>Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste </p>

        <footer>
          <p><strong>Criada em:</strong>27/05/2020</p>
          <button>
            Editar
          </button>
        </footer>
      </main>
    </Container>
  );
}

export default Task;