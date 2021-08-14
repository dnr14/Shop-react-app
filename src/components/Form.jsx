import React from "react";

const Form = ({ children, handleSubmit }) => {
  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
