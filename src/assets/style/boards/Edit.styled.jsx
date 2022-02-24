import styled from "styled-components";

export const StyledDiv = styled.div`
  position: relative;

  textarea {
    display: block;
    width: 100%;
    height: 150px;
    padding: 1rem;
    resize: none;
    overflow-y: visible;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0 0 2px rgb(149 165 166);
    &:focus {
      outline: none;
    }

    ::-webkit-scrollbar {
      width: 0.5rem; /* 세로축 스크롤바 길이 */
    }
    ::-webkit-scrollbar-track {
      background-color: #fff;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(46, 204, 113, 1);
      border-radius: 5px;
    }
    &::-webkit-input-placeholder {
      color: rgb(187, 187, 187);
      opacity: 1;
      transition: 0.5s;
    }

    &:focus::-webkit-input-placeholder {
      opacity: 0;
    }
  }

  span {
    display: inline-block;
    padding: 0.5rem 0 0.5rem 0.2rem;
    letter-spacing: 0.2rem;
    color: #34495e;
  }

  div {
    position: absolute;
    right: 10px;
    bottom: 3rem;

    & > button {
      padding: 0.5rem 1rem;
      border-radius: 5px;
      border: transparent;
      font-size: 1rem;
      letter-spacing: 0.09rem;
      background-color: rgba(46, 204, 113, 1);
      color: #fff;
      font-weight: bold;
      box-shadow: 1px 1px 1px rgba(00, 00, 00, 0.1);
      cursor: pointer;
      &:hover {
        background-color: rgba(46, 204, 113, 0.5);
      }
    }
  }
`;
