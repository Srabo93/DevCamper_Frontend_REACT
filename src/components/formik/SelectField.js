import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { Field, useField } from "formik";
const SelectField = (props) => {
  const [meta] = useField(props);
  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel as="p" fontSize="sm">
        {props.name.toUpperCase()}
      </FormLabel>
      <Field as={Select} name={props.name}>
        {props.value.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </Field>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default SelectField;
