import styled from 'styled-components';

interface ContainerProps {
  hasError: boolean;
}

interface TaskProps {
  finished: boolean;
}

export const Container = styled.div<ContainerProps>`
  header {
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    border-bottom: 1px solid #333;

    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      width: 200px;

      label {
        width: 100%;

        & + label {
          margin-top: 10px;
        }

        p {
          color: #fff;
          font-weight: bold;
          margin-bottom: 5px;
        }

        input {
          border: none;
          width: 100%;
          padding: 10px 15px;
          background-color: transparent;
          border: 1px solid #333;
          border-radius: 8px;
          color: #fff;
          transition: all 0.4s ease;
          font-size: 15px;

          &:focus {
            border: 1px solid #fff;
          }

          &::placeholder {
            color: #888;
            font-size: 16px;
          }
        }

        textarea {
          border: none;
          width: 100%;
          max-width: 100%;
          min-width: 100%;
          max-height: 100px;
          min-height: 100px;
          padding: 10px 15px;
          background-color: transparent;
          border: 1px solid #333;
          border-radius: 8px;
          color: #fff;
          transition: border 0.4s ease;
          font-size: 15px;

          &:focus {
            border: 1px solid #fff;
          }

          &::placeholder {
            color: #888;
            font-size: 16px;
          }
        }
      }

      button {
        background-color: #fff;
        color: #000;
        border-radius: 6px;
        padding: 10px 25px;
        border: none;
        width: 100%;
        margin-top: 10px;
        font-weight: bold;
        transition: all 0.4s ease;
        cursor: pointer;

        &:hover {
          background-color: #000;
          color: #fff;
          border: 1px solid #fff;
        }
      }
    }
  }
`;

export const TaskContainer = styled.div<TaskProps>``;

export const Error = styled.span`
  display: block;
  color: #fc4e3f;
  margin-top: 8px;
`;
