import styled from 'styled-components';

export const Container = styled.div`
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

      &:focus {
        border: 2px solid #56ff8e;
      }
    }

    textarea {
      max-width: 300px;
      min-width: 300px;
      padding: 12px;
      border-radius: 4px;
      border: 0;
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
      border-radius: 4px;
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
