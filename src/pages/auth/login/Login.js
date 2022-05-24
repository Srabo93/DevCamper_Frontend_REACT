import React from "react";
import { Container, Text, VStack, Link } from "@chakra-ui/react";
import Header from "./Header";
import Form from "./Form";

const Login = () => {
  return (
    <Container maxW="container.sm">
      <VStack w="full" h="full" spacing={5} alignItems="flex-start" py={10}>
        <Header />
        <Form />
      </VStack>
      <Text>
        Forgot your Password?{" "}
        <Link color="red.500" href="#">
          Reset Password
        </Link>
      </Text>
    </Container>
  );
};

export default Login;
