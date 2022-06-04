import React from "react";
import { VStack } from "@chakra-ui/react";
import Feature from "./Feature";
const Bootcamp = ({ bootcamps }) => {
  return (
    <VStack
      w="full"
      h="full"
      p={[0, 5, 10]}
      spacing={3}
      alignItems="flex-start"
      bg="lightblue"
    >
      {bootcamps.data.map((bootcamp, index) => (
        <Feature bootcamp={bootcamp} key={index} />
      ))}
    </VStack>
  );
};

export default Bootcamp;
