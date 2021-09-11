import React from "react";

const LoginForm = ({ handleSubmit, handleChane, state }) => {
  const { id, password } = state;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        아이디
        <input type="text" name="id" onChange={handleChane} value={id} />
      </div>
      <div>
        비밀번호
        <input type="text" name="password" onChange={handleChane} value={password} />
      </div>
      <div>
        <button type="submit">로그인</button>
      </div>
    </form>
  );
};

export default LoginForm;
