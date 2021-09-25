import React, { memo } from "react";

const NewPassword = memo(({ handleSubmit, error, success, loading, value }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <span>아이디</span>
          <input type="text" name="id" defaultValue={value.id} />
        </div>
        <div>
          <span>이메일</span>
          <input type="text" defaultValue={value.email} />
        </div>
        <div>
          <span>새 비밀번호</span>
          <input type="password" />
        </div>
        <button type="submit">눌러</button>
      </form>
    </div>
  );
});

export default NewPassword;
