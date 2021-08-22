import React from "react";
import { setDateFormat } from "util/DateUtil";

const Result = ({ insertData }) => {
  console.log(insertData);
  return (
    <div>
      <div>{setDateFormat(insertData.date)}</div>
      <div>{insertData.category}</div>
      <div>{insertData.price}</div>
      <div>{insertData.time}</div>
    </div>
  );
};

export default Result;
