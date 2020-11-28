import React from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const BackButton: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container>
      <button type="button" onClick={() => goBack()}>
        <IoIosArrowRoundBack size={50} color="#fff" />
        <p>Voltar</p>
      </button>
    </Container>
  );
};

export default BackButton;
