import styled from "styled-components";

export const Cotainer = styled.div`
  margin-top: 2rem;
  min-height: 25rem;
  word-break: keep-all;
  span {
    display: inline-block;
    width: 100%;
    padding: 0 0.5rem;
    letter-spacing: 0.05rem;
    text-align: center;
    word-break: break-all;
  }

  & > div {
    & > div {
      &:first-child {
        & > span {
          background-color: rgb(46, 204, 113);
          border-radius: 5px;
          color: #fff;
          font-weight: bold;
        }
      }
    }
    :hover {
      background-color: rgba(46, 204, 113, 0.8);
      cursor: pointer;
      color: #fff;
    }
  }
`;
