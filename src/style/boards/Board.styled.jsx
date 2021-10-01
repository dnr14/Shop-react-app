import styled from "styled-components";

export const StyledDiv = styled.div`
  padding: 10px 0;
  &:last-child {
    margin-bottom: 2rem;
  }

  & > div {
    &:first-child {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      & > div {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        span {
          display: inline-block;
          letter-spacing: 0.1rem;
          padding: 0.2rem;
          &:first-child {
            color: rgba(46, 204, 113, 1);
            font-weight: bold;
            font-size: 1.2rem;
          }
          &:last-child {
            font-size: 1rem;
            font-weight: bold;
          }
        }
      }
    }

    &:nth-child(2) {
      text-align: center;
      & > img {
        padding: 1rem 0;
        max-width: 100%;
        max-height: auto;
        object-fit: cover;
      }
    }
    &:nth-child(3) {
      display: flex;
      justify-content: space-between;

      & > div {
        display: flex;

        span {
          display: inline-block;
          padding: 0.5rem 0.2rem;
          color: rgba(46, 204, 113, 1);
          font-weight: bold;
          letter-spacing: 0.2rem;
        }

        &:last-child {
          gap: 0.2rem;
          align-items: center;
          & > button {
            background-color: rgba(46, 204, 113, 0.8);
            box-shadow: 2px 2px 2px rgba(44, 62, 80, 0.5);
            font-weight: bold;
            padding: 0.2rem 1rem;
            border-radius: 5px;
            border: none;
            position: relative;
            cursor: pointer;

            &::after {
              position: absolute;
              opacity: 0;
              content: "";
              left: 0;
              right: 0;
              margin: 0 auto;
              height: 1px;
              bottom: -5px;
              border-top: 1px solid;
            }

            &:hover {
              background-color: rgba(46, 204, 113, 1);
              box-shadow: 2px 2px 2px rgba(44, 62, 80, 0.5);
              color: #fff;
              &::after {
                opacity: 1;
              }
            }
          }
        }
      }
    }

    &:nth-child(4) {
      text-align: center;
      position: relative;
      &::after {
        position: absolute;
        content: "";
        top: 0px;
        left: 2.7rem;
        width: 0px;
        height: 0px;
        background-color: black;
        display: inline-block;
        background-color: transparent;
        border-bottom: 1.5rem solid #fff;
        border-right: 1rem solid transparent;
        border-left: 1rem solid transparent;
        border-radius: 5px;
      }
      textarea {
        display: inline-block;
        margin-top: 1.1rem;
        width: 94%;
        min-height: 100px;
        resize: none;
        background-color: #fff;
        overflow: hidden;
        border-radius: 10px;
        padding: 1rem 2.5%;
        font-weight: bold;
        box-shadow: 2px 2px 2px rgba(44, 62, 80, 0.5);
        box-sizing: content-box;
        &:focus {
          outline: none;
        }
      }
    }
  }
`;
