import React from 'react';
import { FiArrowLeft } from 'react-icons/fi'
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
          <FiArrowLeft color="#fff" size={40}/>
          <p>Voltar</p>
        </button>
      </header>

      <main>
        <h1>Tírulo</h1>
        <p>dOLDSAosafosjafosaflkosalofskafokspa</p>

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