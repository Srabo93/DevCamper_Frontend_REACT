import React from "react";
import { VStack } from "@chakra-ui/react";
import Location from "./Location";
import ExtraFilterOptions from "./ExtraFilterOptions";
const Filter = () => {
  return (
    <VStack
      h="full"
      w={{ base: "full", lg: "80" }}
      p={[5, 5, 10]}
      mb={[5, 0, 0]}
      spacing={3}
      alignItems="flex-start"
      boxShadow="lg"
      rounded="md"
      bg="white"
    >
      <Location />
      <ExtraFilterOptions />
    </VStack>
  );
};

export default Filter;
