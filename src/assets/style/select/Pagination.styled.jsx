import styled from "styled-components";
import prevArrow from "assets/images/prevArrow.svg";
import nextArrow from "assets/images/nextArrow.svg";

export const PagiNationUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;

  li {
    display: inline-block;
    & > a {
      box-sizing: content-box;
      display: inline-block;
      padding: 5px;
      width: 20px;
      text-align: center;
      color: #000;
      border-radius: 2px;
      box-shadow: 0px 0px 2px rgba(127, 140, 141, 0.5);
    }
  }
  .prve,
  .next {
    background-size: cover;
    height: 19px;
    width: 19px;
  }
  .prve {
    background-image: url(${prevArrow});
  }
  .next {
    background-image: url(${nextArrow});
  }

  .active {
    background-color: rgba(46, 204, 113, 1);
    color: #fff;
  }
`;
