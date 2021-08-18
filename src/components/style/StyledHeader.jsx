import styled, { css } from "styled-components";
import { maxWidthByBreakPointTable, minWidthByBreakPointTable } from "./Styled";

// ========= HEADER ===========
const flex_postion_center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const flex_postion_end = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const innerHeight = css`
  height: 100px;
`;

const headAnchorColor = css`
  color: #fff;
`;

const StyledHeader = styled.header`
  background-color: rgba(46, 204, 113, 1);
  letter-spacing: 0.2rem;

  .header-title {
    ${flex_postion_center}
    ${innerHeight}
    

    a {
      ${headAnchorColor}
      padding: 15px 0.625rem;
      font-size: 1.2rem;
    }
  }
  .nav-list {
    ${flex_postion_end}
    ${innerHeight}
    flex-wrap: wrap;
    padding: 0 1rem;
    .nav-item {
      text-align: center;
      a {
        padding: 15px 0.625rem;
        font-size: 1.2rem;
        position: relative;
        ${headAnchorColor}
        &:after {
          display: none;
          content: "";
          position: absolute;
          border-bottom: 1px solid;
          height: 1px;
          bottom: 0.625rem;
          right: 0;
          left: 0;
        }
      }
    }
  }

  // 1200px부터
  ${minWidthByBreakPointTable(css`
    .nav-list {
      .nav-item {
        .active {
          font-weight: bold;
          &:after {
            display: inline-block;
            content: "";
            position: absolute;
            border-bottom: 1px solid;
            height: 1px;
            bottom: 0.625rem;
            right: 0;
            left: 0;
            box-shadow: 2px 2px 3px rgba(34, 47, 62, 1);
          }
        }
      }
    }
  `)}

  // 992px까지
  ${maxWidthByBreakPointTable(css`
    .header-title {
      justify-content: space-between;
      padding: 0 15px;

      .menu-btn {
        position: relative;
        ${flex_postion_center}
        width: 80px;
        height: 40px;
        cursor: pointer;
        transform: 0.5;

        .menu-btn__burger {
          width: 3rem;
          height: 0.5rem;
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
          transition: 0.5s;

          &::before,
          &::after {
            content: "";
            position: absolute;
            width: 3rem;
            height: 0.5rem;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
            transition: 0.5s;
          }
          &::before {
            transform: translateY(-1rem);
          }
          &::after {
            transform: translateY(1rem);
          }
        }
      }
      .menu-btn.open .menu-btn__burger {
        transform: translateX(-50px);
        background: transparent;
        box-shadow: none;
        &::before {
          transform: rotate(45deg) translate(35px, -35px);
        }
        &::after {
          transform: rotate(-45deg) translate(35px, 35px);
        }
      }

      a {
        font-size: 2rem;
      }
    }

    .nav-list {
      overflow: hidden;
      height: 0;
      padding: 0;
      transition: 1s;
      .nav-item {
        width: 100%;
        a {
          width: 100%;
          &:hover {
            background-color: rgba(236, 240, 241, 1);
            color: rgba(44, 62, 80, 1);
            font-weight: bold;
          }
        }

        .active {
          font-weight: bold;
          background-color: #fff;
          color: #000;
        }
      }
    }

    //menu on off 설정
    .nav-list.open {
      height: 255px;
    }
  `)}
`;

export default StyledHeader;
