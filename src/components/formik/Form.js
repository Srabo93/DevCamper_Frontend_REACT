import React from "react";
import { VStack, Button, RadioGroup } from "@chakra-ui/react";
import { Formik } from "formik";
import FormikRenderControl from "./FormikRenderControl";
import ValidationControl from "./ValidationControl";

const Form = ({
  typeInput,
  inputData,
  typeRadio,
  radioData,
  validation,
  btn,
}) => {
  let values = {};
  inputData.map((element) => (values[`${element.name}`] = ""));
  if (radioData !== undefined) values["registeredUser"] = "";
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
          {FormikRenderControl(inputData, typeInput)}
          {<RadioGroup>{FormikRenderControl(radioData, typeRadio)}</RadioGroup>}

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
