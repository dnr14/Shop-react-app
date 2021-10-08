import React, { memo } from "react";

import { Cotainer } from "style/select/DataTable.styled";
import DataRow from "./DataRow";

const DataTable = ({ data, isCategory, tableColumnSize, handleClick }) => {
  return (
    <Cotainer>
      {data &&
        data.map((item) => (
          <DataRow
            key={item.id}
            item={item}
            isCategory={isCategory}
            tableColumnSize={tableColumnSize}
            handleClick={handleClick}
          />
        ))}
    </Cotainer>
  );
};

export default memo(DataTable);
