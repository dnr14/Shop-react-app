import React, { useEffect, useRef, useState } from "react";
import { StyledWrapper, FlexBox } from "assets/style/select/Modal.styled";
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

const TIEM = 500;
const Modal = ({ isVisible, setIsVisible, updateData, submit, isCategory }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const close = useRef(false);
  const [visible, setVisible] = useState(false);
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

  return (
    <>
      {isVisible && (
        <StyledWrapper visible={visible}>
          <form
            onSubmit={handleSubmit(submit(updateData.id, setVisible, close))}
          >
            <header>
              <h1>입출 업데이트</h1>
              <span onClick={modalClose} />
            </header>
            <main>
              {isCategory && (
                <Category
                  category={updateData.category}
                  register={register}
                  errors={errors}
                />
              )}
              {isCategory ? (
                <ExpenditureDate
                  expenditureDate={updateData.time}
                  register={register}
                  errors={errors}
                />
              ) : (
                <IncomeDate
                  incomeDate={updateData.time}
                  register={register}
                  errors={errors}
                />
              )}

              <InsertDate
                insertTime={updateData.insertTime}
                register={register}
                errors={errors}
              />
              {isCategory ? (
                <ExpenditureMoney
                  expenditureMoney={updateData.price}
                  register={register}
                  errors={errors}
                />
              ) : (
                <IncomeMoney
                  incomeMoney={updateData.price}
                  register={register}
                  errors={errors}
                />
              )}
            </main>
            <footer>
              <div>
                <button type="submit">업데이트</button>
              </div>
            </footer>
          </form>
        </StyledWrapper>
      )}
    </>
  );
};

const Category = ({ category, register, errors }) => {
  return (
    <FlexBox>
      <div>
        <span>카테고리</span>
        <span>
          {errors.category?.type === "pattern" && "* 올바른 값이 아닙니다."}
          {errors.category?.type === "required" && "*  값을 선택 해주세요."}
        </span>
      </div>
      <div>
        <select
          defaultValue={category}
          {...register("category", {
            pattern: /(식비|교통비|공과금|기타)/i,
            required: true,
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
    </FlexBox>
  );
};
const ExpenditureDate = ({ expenditureDate, register, errors }) => {
  return (
    <>
      <FlexBox>
        <div>
          <span>지출날짜</span>
          <span>
            {errors.expenditureDate?.type === "empty" &&
              "* 올바른 값이 아닙니다."}
            {errors.expenditureHoureTime?.type === "formatError" &&
              "* 올바른 시간이 아닙니다."}
            {errors.expenditureMinutesTime?.type === "formatError" &&
              "* 올바른 시간이 아닙니다."}
          </span>
        </div>
        <div>
          <input
            type="date"
            {...register("expenditureDate", {
              validate: {
                empty: (date) => date !== "",
              },
            })}
            defaultValue={setInputCheckBoxDateType(expenditureDate)}
          />
        </div>
        <div>
          <select
            name="expenditureHoureTime"
            {...register("expenditureHoureTime", {
              validate: {
                formatError: (houreTime) => !/^[0-2][1-4].+/gi.test(houreTime),
              },
            })}
            defaultValue={setInputCheckBoxTimeType(expenditureDate).getHours()}
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
            {...register("expenditureMinutesTime", {
              validate: {
                formatError: (houreTime) => !/^[0-5][0-9].+/gi.test(houreTime),
              },
            })}
            defaultValue={setInputCheckBoxTimeType(
              expenditureDate
            ).getMinutes()}
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
      </FlexBox>
    </>
  );
};

const IncomeDate = ({ incomeDate, register, errors }) => {
  return (
    <>
      <FlexBox>
        <div>
          <span>수입날짜</span>
          <span>
            {errors.incomeDate?.type === "empty" && "* 올바른 값이 아닙니다."}
            {errors.incomeHoureTime?.type === "formatError" &&
              "* 올바른 시간이 아닙니다."}
            {errors.incomeMinutesTime?.type === "formatError" &&
              "* 올바른 시간이 아닙니다."}
          </span>
        </div>
        <div>
          <input
            type="date"
            {...register("incomeDate", {
              validate: {
                empty: (date) => date !== "",
              },
            })}
            defaultValue={setInputCheckBoxDateType(incomeDate)}
          />
        </div>
        <div>
          <select
            name="incomeHoureTime"
            {...register("incomeHoureTime", {
              validate: {
                formatError: (houreTime) => !/^[0-2][1-4].+/gi.test(houreTime),
              },
            })}
            defaultValue={setInputCheckBoxTimeType(incomeDate).getHours()}
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
            {...register("incomeMinutesTime", {
              validate: {
                formatError: (houreTime) => !/^[0-5][0-9].+/gi.test(houreTime),
              },
            })}
            defaultValue={setInputCheckBoxTimeType(incomeDate).getMinutes()}
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
      </FlexBox>
    </>
  );
};
const InsertDate = ({ insertTime, register, errors }) => {
  return (
    <>
      <FlexBox>
        <div>
          <span>등록날짜</span>
          <span>
            {errors.insertDate?.type === "empty" && "* 올바른 값이 아닙니다."}
            {errors.insertHoureTime?.type === "formatError" &&
              "* 올바른 시간이 아닙니다."}
            {errors.insertMinutesTime?.type === "formatError" &&
              "* 올바른 시간이 아닙니다."}
          </span>
        </div>
        <div>
          <input
            {...register("insertDate", {
              validate: {
                empty: (date) => date !== "",
              },
            })}
            type="date"
            defaultValue={setInputCheckBoxDateType(insertTime)}
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
      </FlexBox>
    </>
  );
};
const ExpenditureMoney = ({ expenditureMoney, register, errors }) => {
  return (
    <FlexBox>
      <div>
        <span>지출금액</span>
        <span>
          {errors.expenditureMoney?.type === "maxLength" &&
            "*최대 11자 입니다."}
          {errors.expenditureMoney?.type === "whiteSpaceCheck" &&
            "*공백을 입력했습니다."}
          {errors.expenditureMoney?.type === "isKoreaLengCheck" &&
            "*한글을 입력했습니다."}
        </span>
      </div>
      <div>
        <input
          {...register("expenditureMoney", {
            maxLength: 11,
            validate: {
              whiteSpaceCheck: (value) => !isWhiteSpaceCheck(value),
              isKoreaLengCheck: (value) => !isKoreaLengCheck(value),
            },
          })}
          type="text"
          maxLength="12"
          defaultValue={expenditureMoney}
        />
      </div>
    </FlexBox>
  );
};

const IncomeMoney = ({ incomeMoney, register, errors }) => {
  return (
    <FlexBox>
      <div>
        <span>수입금액</span>
        <span>
          {errors.incomeMoney?.type === "maxLength" && "*최대 11자 입니다."}
          {errors.incomeMoney?.type === "whiteSpaceCheck" &&
            "*공백을 입력했습니다."}
          {errors.incomeMoney?.type === "isKoreaLengCheck" &&
            "*한글을 입력했습니다."}
        </span>
      </div>
      <div>
        <input
          {...register("incomeMoney", {
            maxLength: 11,
            validate: {
              whiteSpaceCheck: (value) => !isWhiteSpaceCheck(value),
              isKoreaLengCheck: (value) => !isKoreaLengCheck(value),
            },
          })}
          type="text"
          maxLength="12"
          defaultValue={incomeMoney}
        />
      </div>
    </FlexBox>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool,
  setIsVisible: PropTypes.func,
};
Modal.defaultProps = {
  isVisible: false,
  setIsVisible: () => {
    throw new Error("함수를 구현하세요");
  },
};

export default Modal;
