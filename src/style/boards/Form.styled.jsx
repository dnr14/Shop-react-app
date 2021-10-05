import styled, { css } from "styled-components";
import { maxWidthByBreakPointSmaillMobile } from "style/Styled";

export const StyledForm = styled.form`
  & > div {
    &:first-child {
      display: flex;
      padding: 1rem 0;
      flex-wrap: wrap;
      gap: 10px;
      ${maxWidthByBreakPointSmaillMobile(
        css`
          flex-direction: column;
        `
      )}

      & > div {
        flex: 1;
        &:first-child {
          display: flex;
          flex-direction: column;
          gap: 10px;
          ${maxWidthByBreakPointSmaillMobile(
            css`
              flex-direction: column;
            `
          )}

          input {
            padding: 0.3rem;
            font-weight: bold;
            letter-spacing: 0.1rem;
            border-radius: 5px;
            border: 0;
            box-shadow: 0 0 2px rgba(149, 165, 166, 1);
            font-size: 0.8rem;

            &:auto {
              background-color: #fff;
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
        }

        &:last-child {
          justify-content: flex-end;
          align-items: center;
          display: flex;
          label {
            align-items: center;
            display: flex;
            cursor: pointer;
            vertical-align: middle;
          }
          input {
            width: 1rem;
            height: 1rem;
            display: none;
            &:first-child:checked ~ span {
              background-color: rgba(46, 204, 113, 1);
              border-radius: 20px;
              box-shadow: 0 0 2px rgba(149, 165, 166, 1);
            }
          }
          span {
            padding: 0.2rem;
            padding-bottom: 4px;
          }
        }
      }
    }

    &:nth-child(3) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 10px;

      input[type="text"] {
        display: inline-block;
        height: 3rem;
        padding: 0 10px;
        vertical-align: middle;
        border: 1px solid #dddddd;
        flex: 1;
        color: #999999;
        background-color: #fff;
        border-radius: 5px;
      }
      label {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        color: #fff;
        vertical-align: middle;
        background-color: #999999;
        cursor: pointer;
        height: 3rem;
        border-radius: 5px;
        background-color: rgba(46, 204, 113, 1);
        transition: 0.5s background-color;
        &:hover {
          background-color: rgba(46, 204, 113, 0.5);
        }
      }

      input[type="file"] {
        position: absolute;
        width: 0;
        height: 0;
        padding: 0;
        overflow: hidden;
        border: 0;
      }
    }
  }
`;

export const Errors = styled.span`
  color: red !important;
  font-size: 0.8rem !important;
`;
