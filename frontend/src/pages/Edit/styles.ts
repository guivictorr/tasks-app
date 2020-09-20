import styled from 'styled-components';

interface ContainerProps {
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  display:flex;
  flex-direction:column;
  align-items:center;

  header {
    width: 100%;
  }

  form {
    display:flex;
    flex-direction: column;
    width: 300px;

    label {
      color: #f5f5f5;
      margin: 5px 0;
      font-size: 14px;
      font-weight: bold;
    }

    input {
      padding: 12px;
      border-radius: 4px;
      border: 0;
      background-color: #f5f5f5;
      border: 2px solid ${({hasError}) => hasError ? '#fc4e3f': '#fff'};

      &:focus {
        border: 2px solid #ffaa56;
      }
    }

    textarea {
      max-width: 300px;
      min-width: 300px;
      padding: 12px;
      margin-bottom: 10px;
      border-radius: 4px;
      border: 2px solid ${({hasError}) => hasError ? '#fc4e3f': '#fff'};
      background-color: #f5f5f5;

      &:focus {
        border: 2px solid #ffaa56;
      }
    }

    button {
      padding: 12px;
      border: 0;
      border-radius: 4px;
      background-color: #ffaa56;
      font-weight: bold;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #fc4e3f;
  margin-top: 8px;
`
