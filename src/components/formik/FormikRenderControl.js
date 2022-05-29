import React from "react";
import FormikControl from "./FormikControl";

const FormikRenderControl = (inputs, inputtype) => {
  switch (inputtype) {
    case "input":
      return inputs.map((element, index) => {
        return (
          <FormikControl
            control={inputtype}
            type={element.type}
            name={element.name}
            key={index}
            placeholder={element.placeholder}
          />
        );
      });

    case "radio":
      return inputs.map((element, index) => {
        return (
          <FormikControl
            control={inputtype}
            key={index}
            type={element.type}
            name={element.name}
            label={element.label}
            value={element.value}
          />
        );
      });
    default:
      return null;
  }
};

export default FormikRenderControl;
