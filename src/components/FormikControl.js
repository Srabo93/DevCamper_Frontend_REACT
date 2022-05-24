import React from "react";
import InputField from "../pages/auth/components/InputField";
const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <InputField {...rest} />;

    default:
      return null;
  }
};

export default FormikControl;
