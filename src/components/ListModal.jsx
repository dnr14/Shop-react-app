import React, { useEffect, useRef, useState } from "react";
import dropDown from "assets/images/dropDown.svg";
import PropTypes from "prop-types";
import {
  getOneToTwentyForeHoure,
  getZeroToFiftyNineMinutes,
} from "utils/DateUtil";
import {
  setInputCheckBoxDateType,
  setInputCheckBoxTimeType,
} from "utils/DateUtil";
import { useForm } from "react-hook-form";
import { isWhiteSpaceCheck, isKoreaLengCheck } from "utils/Validation";

import styled, { css } from "styled-components";
import Form from "./common/Form";
import { mobile } from "assets/style/GlobalStyled";
import { getFlex } from "assets/style/GlobalStyled";
import Button from "./common/Button";
import { getBackGroundBrandColor1 } from "assets/style/GlobalStyled";
import { getBoxShadow3 } from "assets/style/GlobalStyled";
import { getBrandColor1 } from "assets/style/GlobalStyled";
import { getRedColor1 } from "assets/style/GlobalStyled";

const TIEM = 500;
const ListModal = ({
  isVisible,
  setIsVisible,
  updateData,
  onSubmit,
  isCategory,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const close = useRef(false);
  const [visible, setVisible] = useState(false);
  const {
    category,
    expenditureDate,
    incomeDate,
    insertDate,
    incomeMoney,
    expenditureMoney,
  } = errors;

  const modalClose = () => {
    setVisible(false);
    close.current = true;
  };

  useEffect(() => {
    if (isVisible) reset();
    if (!visible && isVisible && !close.current)
      setTimeout(() => setVisible(true), TIEM);
    if (close.current) {
      setTimeout(() => setIsVisible(false), TIEM);
      close.current = false;
    }
  }, [visible, setVisible, isVisible, setIsVisible, reset]);

  if (!isVisible) return null;

  const name = isCategory ? "expenditure" : "income";

  return (
    <ListModalWrapper visible={visible}>
      <Form onSubmit={handleSubmit(onSubmit(updateData.id, setVisible, close))}>
        <main>
          <Category
            isCategory={isCategory}
            category={updateData.category}
            register={register}
            error={category}
          />

          <Date
            names={{
              date: `${name}Date`,
              houre: `${name}HoureTime`,
              minutes: `${name}MinutesTime`,
            }}
            text={isCategory ? "지출 날짜" : "수입 날짜"}
            defaultValue={updateData.time}
            register={register}
            error={isCategory ? expenditureDate : incomeDate}
          />

          <InsertDate
            insertTime={updateData.insertTime}
            register={register}
            error={insertDate}
          />
          <Money
            text={isCategory ? "지출금액" : "수입금액"}
            name={isCategory ? "expenditureMoney" : "incomeMoney"}
            error={isCategory ? expenditureMoney : incomeMoney}
            defaultValue={updateData.price}
            expenditureMoney={updateData.price}
            register={register}
          />
        </main>
        <Footer>
          <Button text="수정" type="submit" />
          <Button text="닫기" onClick={modalClose} type="button" />
        </Footer>
      </Form>
    </ListModalWrapper>
  );
};

const Category = ({ isCategory, category, register, error }) => {
  if (!isCategory) return null;

  return (
    <Row>
      <div>
        <span>카테고리</span>
        <span>{error?.message}</span>
      </div>
      <div>
        <select
          name="category"
          defaultValue={category}
          {...register("category", {
            pattern: /(식비|교통비|공과금|기타)/i,
            required: "값을 선택 해주세요.",
          })}
        >
          <option value="">선택</option>
          <option value="식비">식비</option>
          <option value="교통비">교통비</option>
          <option value="공과금">공과금</option>
          <option value="기타">기타</option>
        </select>
        <span>
          <img src={dropDown} alt="dropDown" />
        </span>
      </div>
    </Row>
  );
};
const Date = ({ names, defaultValue, text, register, error }) => {
  return (
    <Row>
      <div>
        <span>{text}</span>
        <span>{error?.message}</span>
      </div>
      <div>
        <input
          type="date"
          {...register(names.date, {
            validate: {
              empty: (date) => (date === "" ? "옳바른값을 입력하세요." : true),
            },
          })}
          defaultValue={setInputCheckBoxDateType(defaultValue)}
        />
      </div>
      <div>
        <select
          name={names.houre}
          {...register(names.houre, {
            validate: {
              formatError: (houreTime) =>
                /^[0-2][1-4].+/gi.test(houreTime)
                  ? "올바른 시간이 아닙니다."
                  : true,
            },
          })}
          defaultValue={setInputCheckBoxTimeType(defaultValue).getHours()}
        >
          {getOneToTwentyForeHoure().map((el, idx) => (
            <option key={idx} value={el}>
              {el}시
            </option>
          ))}
        </select>
        <span>
          <img src={dropDown} alt="dropDown" />
        </span>
      </div>
      <div>
        <select
          name={names.minutes}
          {...register(names.minutes, {
            validate: {
              formatError: (houreTime) =>
                /^[0-5][0-9].+/gi.test(houreTime)
                  ? "올바른 시간이 아닙니다."
                  : true,
            },
          })}
          defaultValue={setInputCheckBoxTimeType(defaultValue).getMinutes()}
        >
          {getZeroToFiftyNineMinutes().map((el, idx) => (
            <option key={idx} value={el}>
              {el}분
            </option>
          ))}
        </select>
        <span>
          <img src={dropDown} alt="dropDown" />
        </span>
      </div>
    </Row>
  );
};

const InsertDate = ({ insertTime, register, error }) => {
  return (
    <Row>
      <div>
        <span>등록날짜</span>
        <span>{error?.message}</span>
      </div>
      <div>
        <input
          {...register("insertDate", {
            validate: {
              empty: (date) => (date === "" ? "옳바른값을 입력하세요." : true),
            },
          })}
          defaultValue={setInputCheckBoxDateType(insertTime)}
          type="date"
        />
      </div>
      <div>
        <select
          {...register("insertHoureTime", {
            validate: {
              formatError: (houreTime) => !/^[0-2][1-4].+/gi.test(houreTime),
            },
          })}
          defaultValue={setInputCheckBoxTimeType(insertTime).getHours()}
        >
          {getOneToTwentyForeHoure().map((el, idx) => (
            <option key={idx} value={el}>
              {el}시
            </option>
          ))}
        </select>
        <span>
          <img src={dropDown} alt="dropDown" />
        </span>
      </div>
      <div>
        <select
          {...register("insertMinutesTime", {
            validate: {
              formatError: (houreTime) => !/^[0-5][0-9].+/gi.test(houreTime),
            },
          })}
          defaultValue={setInputCheckBoxTimeType(insertTime).getMinutes()}
        >
          {getZeroToFiftyNineMinutes().map((el, idx) => (
            <option key={idx} value={el}>
              {el}분
            </option>
          ))}
        </select>
        <span>
          <img src={dropDown} alt="dropDown" />
        </span>
      </div>
    </Row>
  );
};
const Money = ({ text, name, defaultValue, register, error }) => {
  return (
    <Row>
      <div>
        <span>{text}</span>
        <span>{error?.message}</span>
      </div>
      <div>
        <input
          name={name}
          {...register(name, {
            validate: {
              whiteSpaceCheck: (value) =>
                isWhiteSpaceCheck(value) ? "공백을 입력했습니다." : true,
              isKoreaLengCheck: (value) =>
                isKoreaLengCheck(value) ? "한글을 입력했습니다." : true,
            },
            maxLength: {
              value: 11,
              message: "최대 11자 입니다.",
            },
          })}
          maxLength={12}
          type="text"
          defaultValue={defaultValue}
        />
      </div>
    </Row>
  );
};

ListModal.propTypes = {
  isVisible: PropTypes.bool,
  setIsVisible: PropTypes.func,
};
ListModal.defaultProps = {
  isVisible: false,
  setIsVisible: () => {
    throw new Error("함수를 구현하세요");
  },
};

const ListModalWrapper = styled.div`
  position: fixed;
  overflow-y: scroll;
  ${getFlex("center", "center")}
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
  opacity: 0;
  background-color: rgba(127, 140, 141, 0.5);
  transition: opacity 0.5s, z-index 0.5s ease-in;

  ${({ visible }) =>
    visible &&
    css`
      z-index: 2;
      opacity: 1;
    `}

  form {
    transition: transform 1s ease-in;
    transform: translateY(100px);
    max-width: 500px;
    ${({ visible }) =>
      visible &&
      css`
        transform: translateY(0px);
        z-index: 2;
        opacity: 1;
      `}
    width: 70%;
    padding: 1.5rem;
    background-color: #fff;
    border-radius: 20px;
    ${mobile} {
      width: 95%;
    }
  }
`;

const Row = styled.div`
  ${getFlex("", "", "column")}
  gap: 0.5rem;

  & + & {
    margin-top: 1rem;
  }

  & > div {
    position: relative;
    ${getFlex("", "center")}
    gap:10px;
    & > span {
      font-weight: 600;
      font-size: 1.2rem;
      ${getBrandColor1};
      letter-spacing: 0.1rem;
    }
    & > span ~ span {
      ${getRedColor1};
      letter-spacing: 0;
      font-size: 0.8rem;
    }

    & > input,
    & > select {
      width: 100%;
      cursor: pointer;
      padding: 0.5rem;
      border: none;
      ${getBoxShadow3};
    }

    & > select + span {
      position: absolute;
      cursor: pointer;
      ${getFlex("center", "center")}
      right: 0;
      top: 0;
      bottom: 0;
      width: 35px;
      ${getBackGroundBrandColor1};
      & > img {
        transform: rotate(-180deg);
        transition: transform 0.5s ease-in;
      }
    }
    & > select:hover + span > img {
      transform: rotate(0deg);
    }
  }
`;

const Footer = styled.footer`
  ${getFlex()}
  gap:5px;
  margin-top: 10px;
  button {
    flex: 1;
  }
`;

export default ListModal;
