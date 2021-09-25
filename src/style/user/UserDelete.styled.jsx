import styled, { css } from "styled-components";

export const Container = styled.main`
  text-align: center;

  ${(props) => {
    return css`
      .thumb {
        background-image: url(${props.deleteImg});
        height: 200px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }
    `;
  }}

  img {
    width: 80%;
    margin: 0 auto;
  }
  article {
    width: 80%;
    margin: 0 auto;
    div {
      color: rgba(46, 204, 113, 1);
      span {
        font-size: 1.5rem;
      }
      margin-top: 1rem;

      &:last-child {
        span {
          font-size: 1.3rem;
        }
      }
    }
  }
`;
