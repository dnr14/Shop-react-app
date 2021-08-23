import React, { memo } from "react";
import { setDateFormat } from "util/DateUtil";

const Result = ({ insertData }) => {
  return (
    <div>
      <div>등록 현황</div>
      <div>{setDateFormat(insertData.date)}</div>
      <div>{insertData.category}</div>
      <div>{insertData.price}</div>
      <div>{insertData.time}</div>
    </div>
  );
};

export default memo(Result);
