import React from "react";
import { Container, VStack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Header from "./components/Header";
import Form from "../../components/formik/Form";

const Register = () => {
  const typography = {
    context: "Register",
    paragraph:
      "Register to list your bootcamp or rate, review and favorite bootcamps",
  };
  const inputFields = [
    { type: "fullname", name: "fullname", placeholder: "Enter Full Name" },
    { type: "email", name: "email", placeholder: "Enter Email" },
    { type: "password", name: "password", placeholder: "Enter password" },
    {
      type: "password",
      name: "repeatpassword",
      placeholder: "Confirm password",
    },
  ];

  const radioOpt = [
    {
      type: "radio",
      name: "registeredUser",
      value: "user",
      label: "Regular User (Browse,Review Bootcamps)",
    },
    {
      type: "radio",
      name: "registeredUser",
      value: "publisher",
      label: "Bootcamp Publisher",
    },
  ];
  return (
    <Container maxW="container.sm">
      <VStack w="full" h="full" spacing={5} alignItems="flex-start" py={10}>
        <Header
          icon={<AddIcon w={8} h={8} color="blue.400" />}
          typography={typography}
        />
        <Form
          inputtype1="input"
          inputs={inputFields}
          inputtype2="radio"
          radio={radioOpt}
          validation="register"
          btn={typography.context}
        />
      </VStack>
    </Container>
  );
};

export default Register;
