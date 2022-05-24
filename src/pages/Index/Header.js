import React from "react";
import { VStack } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/react";
const Header = () => {
  return (
    <VStack w="full" h="full" alignItems="center" justifyContent="center">
      <Heading
        color="white"
        as="h1"
        size={{ base: "xl", md: "2xl", lg: "3xl" }}
      >
        Find a Code Bootcamp
      </Heading>
      <Text
        fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
        as="p"
        color="white"
        align="center"
      >
        Find, rate and read reviews on coding bootcamps
      </Text>
    </VStack>
  );
};

export default Header;
