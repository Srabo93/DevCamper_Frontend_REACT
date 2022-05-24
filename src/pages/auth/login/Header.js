import React from "react";
import { LockIcon } from "@chakra-ui/icons";
import { Flex, Heading, Text } from "@chakra-ui/react";
const Header = () => {
  return (
    <>
      <Flex alignItems="center">
        <LockIcon w={8} h={8} />
        <Heading as="h3" fontSize="5xl">
          Login
        </Heading>
      </Flex>
      <Text fontSize="xl">
        Log in to list your bootcamp or rate, review and favorite bootcamps
      </Text>
    </>
  );
};

export default Header;
