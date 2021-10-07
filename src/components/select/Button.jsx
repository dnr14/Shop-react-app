import React, { memo } from "react";

const Button = memo(({ removeRows }) => {
  return (
    <div>
      <button onClick={removeRows}>삭제</button>
    </div>
  );
});

export default memo(Button);
