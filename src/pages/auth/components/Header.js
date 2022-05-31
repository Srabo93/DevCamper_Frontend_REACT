import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

const Header = ({ icon, typography }) => {
  return (
    <>
      <Flex alignItems="center" pt={5}>
        {icon ?? icon}
        <Heading as="h3" fontSize="5xl">
          {typography.context}
        </Heading>
      </Flex>
      <Text as="p" fontSize="xl">
        {typography.paragraph}
      </Text>
    </>
  );
};

export default Header;
