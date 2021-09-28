import React, { forwardRef, useState } from "react";
import styled, { css } from "styled-components";
import { maxWidthByBreakPointSmaillMobile } from "style/Styled";
import Edit from "./Edit";

const StyledForm = styled.form`
  & > div {
    &:first-child {
      display: flex;
      padding: 0.5rem 0;
      flex-wrap: wrap;
      gap: 10px;
      ${maxWidthByBreakPointSmaillMobile(
        css`
          flex-direction: column;
        `
      )}

      & > div {
        flex: 1;
      }

      & > div {
        &:first-child {
          display: flex;
          gap: 10px;

          ${maxWidthByBreakPointSmaillMobile(
            css`
              flex-direction: column;
            `
          )}

          input {
            flex: 1;
            padding: 0.3rem;
            font-weight: bold;
            letter-spacing: 0.05rem;
            border-radius: 5px;
            border: 0;
            box-shadow: 0 0 2px rgba(149, 165, 166, 1);

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
          }
          input {
            width: 15px;
            height: 15px;
            &:first-child:checked ~ span {
              background-color: rgba(46, 204, 113, 1);
              border-radius: 20px;
              box-shadow: 0 0 2px rgba(149, 165, 166, 1);
            }
          }
          span {
            padding: 0.2rem;
          }
        }
      }
    }
  }
`;

const Form = ({ handleBorderSubmit }, ref) => {
  const [gender, setGender] = useState({
    man: true,
    girl: false,
  });

  const handleGanderChange = (e) => {
    if (e.target.name === "girl") {
      setGender((prev) =>
        prev.girl === true
          ? prev
          : {
              man: false,
              girl: true,
            }
      );
      return;
    }
    setGender((prev) =>
      prev.man === true
        ? prev
        : {
            man: true,
            girl: false,
          }
    );
  };

  return (
    <StyledForm onSubmit={handleBorderSubmit}>
      <div>
        <div>
          <input type="text" placeholder="닉네임" ref={ref.idInput} />
          <input type="password" placeholder="비밀번호" ref={ref.passwordInput} />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="man"
              checked={gender.man}
              onChange={handleGanderChange}
            />
            <span>👨‍🦲</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="girl"
              checked={gender.girl}
              onChange={handleGanderChange}
            />
            <span>👧</span>
          </label>
        </div>
      </div>
      <Edit ref={ref} />
      <div>
        <input type="file" name="file" />
      </div>
      <div>
        <button type="submit">등록</button>
      </div>
    </StyledForm>
  );
};

export default forwardRef(Form);
