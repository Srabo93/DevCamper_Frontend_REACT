import React from "react";
import { VStack, Button } from "@chakra-ui/react";
import { Formik } from "formik";
import FormikControl from "../../../components/FormikControl";
import * as Yup from "yup";

const Form = ({ inputs, btn }) => {
  //TODO SchemaControl, multiple Schema validations in a Switch Case
  let values = {};
  inputs.map((element) => {
    return (values[`${element.type}`] = "");
  });

  return (
    <Formik
      initialValues={values}
      validationSchema={Yup.object({
        user: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .max(15, "Must be 15 characters or less")
          .min(6, "Must be 6 characters or greater")
          .required("Required"),
        // repeatpassword: Yup.string()
        //   .oneOf([Yup.ref("password"), null], "Passwords must match")
        //   .required("Required"),
      })}
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
