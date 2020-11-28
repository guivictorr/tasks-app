import styled from 'styled-components';

export const Container = styled.div`
  main {
    background-color: #000;
    border-bottom: 1px solid #333;
    color: #fff;
    padding: 25px;

    div {
      margin-bottom: 30px;
    }

    h1 {
      font-size: 46px;
      word-wrap: break-word;
    }

    .description {
      word-wrap: break-word;
      margin-top: 30px;
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 40px;

      p {
        strong {
          margin-right: 10px;
        }
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
  }
`;
