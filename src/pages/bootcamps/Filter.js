import React from "react";
import { VStack } from "@chakra-ui/react";
import Location from "./Location";
import ExtraFilterOptions from "./ExtraFilterOptions";
const Filter = () => {
  return (
    <VStack
      mb={[5]}
      p={[5, 10, 15]}
      spacing={3}
      alignItems="center"
      bg="lightgray"
    >
      <Location />
      <ExtraFilterOptions />
    </VStack>
  );
};

export default Filter;
