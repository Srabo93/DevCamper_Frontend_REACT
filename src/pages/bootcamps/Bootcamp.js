import React from "react";
import { VStack } from "@chakra-ui/react";
import Feature from "./Feature";
import Pagination from "../../components/Pagination";
const Bootcamp = ({ bootcamps, ...props }) => {
  return (
    <VStack
      w="full"
      h="full"
      p={[0, 5, 10]}
      spacing={3}
      alignItems="flex-start"
      boxShadow="lg"
      rounded="md"
      bg="white"
    >
      {bootcamps.data.map((bootcamp, index) => (
        <Feature bootcamp={bootcamp} key={index} />
      ))}
      <Pagination maxPageCount={bootcamps.pagination.next} {...props} />
    </VStack>
  );
};

export default Bootcamp;
