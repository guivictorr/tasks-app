import styled from 'styled-components';

export const Container = styled.div`
  
  header{
    margin-bottom: 20px;
  }

  main {
    background-color: #f5f5f5;
    border-radius: 4px;
    padding: 12px;
    word-wrap: break-word;

    p {
      font-size: 16px;
      color: gray;
      strong {
        color: black;
        margin-right: 5px;
      }
    }
  }

  footer {
    display:flex;
    margin-top: 10px;
    justify-content:space-between;
    align-items:center;

    p {
      align-self: flex-end;
    }

    a {
      background-color: orange;
      color: white;
      padding: 12px;
      border-radius: 4px;
      text-decoration:none;
      transition: opacity 0.2s ease;

      &:hover{
        opacity: 0.8;
      }
    }
  }
`;
