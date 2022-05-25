import React from "react";
import { Container, Text, VStack, Link } from "@chakra-ui/react";
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
  return (
    <Container maxW="container.sm">
      <VStack w="full" h="full" spacing={5} alignItems="flex-start" py={10}>
        <Header
          icon={<AddIcon w={8} h={8} color="blue.400" />}
          typography={typography}
        />
        <Form
          inputs={inputFields}
          validation="register"
          btn={typography.context}
        />
      </VStack>
      {/* <Text>
        Forgot your Password?{" "}
        <Link color="red.500" href="#">
          Reset Password
        </Link>
      </Text> */}
    </Container>
  );
};

export default Register;
