import styled from 'styled-components';

interface ContainerProps {
  hasError: boolean;
}

interface TaskProps {
  finished: boolean;
}

export const Container = styled.div<ContainerProps>`
  display:flex;
  flex-direction:column;
  align-items:center;

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
        border: 2px solid #56ff8e;
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
        border: 2px solid #56ff8e;
      }
    }

    button {
      padding: 12px;
      border: 0;
      border-radius: 4px;
      background-color: #56ff8e;
      font-weight: bold;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  section {
    width: 80%;
  }
`;

export const Error = styled.span`
  display: block;
  color: #fc4e3f;
  margin-top: 8px;
`

export const TaskContainer = styled.div<TaskProps>`
  background-color: #f5f5f5;
  display:flex;
  border-radius: 5px;
  margin-top: 80px;

  & + div {
    margin-top: 20px;
  }

  button {
    background-color: #fc4e3f;
    border: 0;
    padding: 12px;
    display:flex;
    align-items:center;
    border-radius: 4px 0 0 4px;
    transition: opacity 0.2s ease;

    svg {
      transition: transform 0.2s ease;
    }

    &:hover {  
      opacity: 0.8;

      svg{
        transform: scale(0.8)
      }
    }

      & + button {
        border-radius: 0;
        background: #5aef8e;
      }
    }

    a {
      display:flex;
      align-items:center;
      flex: 1;
      text-decoration: ${({finished}) => finished ? 'line-through' : 'none'};
      color: #000;
      transition: transform 0.2s ease;
      &:hover{
        transform: translateX(10px)
      }

      p {
        margin-left: 10px;
      }

      svg {
        margin-left: auto;
        margin-right: 20px;
      }
    }
`