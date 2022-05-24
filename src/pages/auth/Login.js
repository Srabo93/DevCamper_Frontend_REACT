import React from "react";
import {
  Container,
  Text,
  FormControl,
  Input,
  Heading,
  VStack,
  FormLabel,
  Button,
  Link,
  Flex,
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";

const Login = () => {
  return (
    <Container maxW="container.sm">
      <VStack w="full" h="full" spacing={5} alignItems="flex-start" py={10}>
        <Flex alignItems="center">
          <LockIcon w={8} h={8} />
          <Heading as="h3" fontSize="5xl">
            Login
          </Heading>
        </Flex>
        <Text fontSize="xl">
          Log in to list your bootcamp or rate, review and favorite bootcamps
        </Text>
        <FormControl>
          <FormLabel>Email Adress</FormLabel>
          <Input
            placeholder="Enter your Email"
            type="email"
            size={{ base: "lg" }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>

          <Input
            placeholder="Enter your Password"
            type="password"
            size={{ base: "lg" }}
          />
        </FormControl>
        <Button w="full" border="2px" borderColor="blue.500">
          Login
        </Button>
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
