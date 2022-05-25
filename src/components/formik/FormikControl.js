import React from "react";
import InputField from "./InputField";
import RadioField from "./RadioField";
const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <InputField {...rest} />;
    case "radio":
      return <RadioField {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
