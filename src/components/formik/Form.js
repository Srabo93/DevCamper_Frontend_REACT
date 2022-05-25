import React from "react";
import { VStack, Button } from "@chakra-ui/react";
import { Formik } from "formik";
import FormikControl from "./FormikControl";
import ValidationControl from "./ValidationControl";

const Form = ({ inputs, validation, btn }) => {
  let values = {};
  inputs.map((element) => {
    return (values[`${element.type}`] = "");
  });

  return (
    <Formik
      initialValues={values}
      validationSchema={ValidationControl(validation)}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      {(formik) => (
        <VStack
          as="form"
          onSubmit={formik.handleSubmit}
          spacing={4}
          align="flex-start"
          w="full"
        >
          {inputs.map((element, index) => {
            return (
              <FormikControl
                control="input"
                type={element.type}
                name={element.type}
                key={index}
                placeholder={element.placeholder}
              />
            );
          })}
          <Button
            mt={5}
            type="submit"
            w="full"
            border="2px"
            borderColor="blue.500"
          >
            {btn}
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default Form;
