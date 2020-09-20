import styled from 'styled-components';

export const Container = styled.div`
  button {
    display:flex;
    align-items:center;
    background:transparent;
    color: #fff;
    border: none;
    &:hover{
      svg{
        transform: translateX(-5px);
      }
      p{
        transform: translateX(5px);
        opacity: 1;
      }
    }
    p {
      font-size: 24px;
      opacity: 0;
      transition: all 0.2s ease;
    }
    svg{
      transition: all 0.2s ease;
    }
  }
`;
