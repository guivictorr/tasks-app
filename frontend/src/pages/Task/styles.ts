import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  header{
    margin-bottom: 20px;

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
  }

  main {
    background-color: #f5f5f5;
    flex: 1;
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

    button {
      background-color: orange;
      color: white;
      border:none;
      padding: 12px;
      border-radius: 4px;
      transition: opacity 0.2s ease;

      &:hover{
        opacity: 0.8;
      }
    }
  }
`;
