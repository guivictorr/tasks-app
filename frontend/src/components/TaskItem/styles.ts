import styled from 'styled-components';

interface TaskItemProps {
  finished: boolean;
}

export const TaskItemContainer = styled.div<TaskItemProps>`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
  background-color: #000;
  border: 1px solid #333;
  border-radius: 12px;
  transition: transform 0.4s ease;

  &:hover {
    transform: translateY(-10px);
  }

  div {
    width: 100%;
    display: flex;
    color: #fff;
    justify-content: space-between;
    padding: 25px 15px;

    h1 {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 250px;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      border: 1px solid #333;
      border-radius: 6px;
      padding: 6px 12px;
      color: #888;
      font-size: 15px;
      transition: all 0.4s ease;

      &:hover {
        border-color: #fff;
        color: #fff;
      }
    }
  }

  p {
    color: #fff;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 300px;
    height: 100%;
    padding: 0 15px;
  }

  footer {
    border-top: 1px solid #333;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 10px 20px;

    &:before {
      content: ' ';
      width: 30px;
      height: 8px;
      background-color: ${({ finished }) => (finished ? '#4d3f' : '#fc4e3f')};
      border-radius: 12px;
    }

    .buttons {
      display: flex;
      align-items: center;

      button {
        width: 60px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px 6px;
        border-radius: 6px;
        cursor: pointer;
        border: none;
        transition: all 0.4s ease;

        & + button {
          margin-left: 10px;
        }

        &:hover {
          background-color: transparent;
        }
      }

      .delete-button {
        background-color: #fc4e3f;
        border: 1px solid #fc4e3f;
      }

      .finish-button {
        background-color: #4d3f;
        border: 1px solid #4d3f;
      }
    }
  }
`;
