import React from "react";
import { Field, useField } from "formik";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
} from "@chakra-ui/react";
import { Radio } from "@chakra-ui/react";
const RadioField = (props) => {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <HStack>
        <Field as={Radio} {...field} {...props}></Field>
        <FormLabel>{props.label}</FormLabel>
      </HStack>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default RadioField;
