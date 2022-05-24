import React from "react";
import { FormControl, Input, Button, FormLabel } from "@chakra-ui/react";
const Form = () => {
  return (
    <>
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
    </>
  );
};

export default Form;
