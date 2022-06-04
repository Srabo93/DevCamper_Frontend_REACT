import React from "react";
import InputField from "./InputField";
import RadioField from "./RadioField";
import SelectField from "./SelectField";
const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <InputField {...rest} />;
    case "radio":
      return <RadioField {...rest} />;
    case "select":
      return <SelectField {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
