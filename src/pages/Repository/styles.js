import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const OwnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;
  border-bottom: 1px solid #eee;

  a {
    color: #008b8b;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueListContainer = styled.div`
  display: flex;
  overflow-y: scroll;
  border-width: 2px;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;

export const IssueList = styled.ul`
  padding: 15px 5px 0;
  margin-top: 10px;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;
    }

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #00688b;
        }
      }
    }

    span {
      background: #eee;
      color: #333;
      border-radius: 2px;
      font-size: 16px;
      font-weight: 600;
      height: 20px;
      padding: 3px 4px;
      margin-left: 10px;
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;
