import React from "react";
import { VStack } from "@chakra-ui/react";
import Feature from "./Feature";
const Bootcamp = ({ bootcamps }) => {
  return (
    <VStack
      // w="full"
      // h="full"
      // p={[0, 5, 5]}
      // spacing={5}
      // alignItems="center"
      // justifyContent="center"
      bg="lightblue"
    >
      {bootcamps.data.map((bootcamp, index) => (
        <Feature bootcamp={bootcamp} key={index} />
      ))}
    </VStack>
  );
};

export default Bootcamp;
