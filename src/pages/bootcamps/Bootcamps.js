import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import { useQuery } from "react-query";
import Filter from "./Filter";
import Bootcamp from "./Bootcamp";

const Bootcamps = () => {
  const fetchBootcamps = async () => {
    const response = await fetch(
      "https://devcamper-api-1337.herokuapp.com/api/v1/bootcamps"
    );
    return response.json();
  };
  const { isLoading, isError, data, error } = useQuery(
    "bootcamps",
    fetchBootcamps
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        h={{ base: "auto", lg: "100vh" }}
        w={{ base: "auto", lg: "100vw" }}
        p={[5, 10, 10]}
        direction={{ base: "column", lg: "row" }}
      >
        <Filter />
        <Bootcamp bootcamps={data} />
      </Flex>
    </Container>
  );
};

export default Bootcamps;
