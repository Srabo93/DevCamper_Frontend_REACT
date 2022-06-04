import React from "react";
import { Container, Text, VStack, Link } from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import Header from "./components/Header";
import Form from "../../components/formik/Form";

const Login = () => {
  const typography = {
    context: "Login",
    paragraph:
      "Log in to list your bootcamp or rate, review and favorite bootcamps",
  };
  const inputData = [
    { type: "email", name: "email", placeholder: "Enter Email" },
    { type: "password", name: "password", placeholder: "Enter password" },
  ];
  return (
    <Container maxW="container.sm" boxShadow="lg" rounded="md" bg="white">
      <VStack w="full" h="full" spacing={5} alignItems="flex-start" py={10}>
        <Header
          icon={<LockIcon w={8} h={8} color="blue.400" />}
          typography={typography}
        />
        <Form
          typeInput="input"
          inputData={inputData}
          validation="login"
          btn={typography.context}
        />
        <Text>
          Forgot your Password?{" "}
          <Link color="red.500" href="#">
            Reset Password
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default Login;
