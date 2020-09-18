import styled from 'styled-components';

interface ContainerProps {
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  display:flex;
  flex-direction:column;
  align-items:center;

  form {
    display:flex;
    flex-direction: column;
    width: 300px;

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
      border-radius: 4px;
      border: 2px solid ${({hasError}) => hasError ? '#fc4e3f': '#fff'};
      margin: 10px 0;
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
    div {
      width: 500px;
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
      }

      a {
        display:flex;
        align-items:center;
        flex: 1;
        text-decoration: none;
        color: #000;
        padding: 0 12px;

        p {
          margin-left: 10px;
        }

        svg {
          margin-left: auto;
        }
      }
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #fc4e3f;
  margin-top: 8px;
`