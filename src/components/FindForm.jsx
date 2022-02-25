import Form from "components/common/Form";
import Title from "components/common/Title";
import React from "react";

const FindForm = ({ titleText, handleSubmit, children }) => {
  return (
    <div>
      <Title text={titleText} />
      <Form onSubmit={handleSubmit}>{children}</Form>
    </div>
  );
};

export default FindForm;
