import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiChevronRight } from 'react-icons/fi'

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <form>
        <input placeholder="O que devo fazer ?" type="text"/>
        <textarea placeholder="Descrição" name="description"/>
        <button>Criar</button>
      </form>

      <section>
        <div>
          <button>
            <FiTrash2 color="#fff" size={25}/>
          </button>
          <Link to="/">
            <p>Título</p>
            <FiChevronRight color="#000" size={25}/>
          </Link>
        </div>
        <div>
          <button>
            <FiTrash2 color="#fff" size={25}/>
          </button>
          <Link to="/">
            <p>Título</p>
            <FiChevronRight color="#000" size={25}/>
          </Link>
        </div>
      </section>
    </Container>
  );
}

export default Home;