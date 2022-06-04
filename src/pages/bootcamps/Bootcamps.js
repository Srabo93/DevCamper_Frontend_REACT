import React from "react";
import { useState } from "react";
import { Container, Flex, Spinner } from "@chakra-ui/react";
import { useQuery } from "react-query";
import Filter from "./Filter";
import Bootcamp from "./Bootcamp";

const Bootcamps = () => {
  const [page, setPage] = useState(1);
  const fetchBootcamps = async ({ queryKey }) => {
    let response = await fetch(
      `https://devcamper-api-1337.herokuapp.com/api/v1/bootcamps?page=${queryKey[1]}&limit=2`
    );
    return response.json();
  };
  const { isLoading, isError, data, error } = useQuery(
    ["bootcamps", page],
    fetchBootcamps,
    { keepPreviousData: true }
  );

  if (isLoading) {
    return (
      <Container w="100vw" h="100vh" mt={20} centerContent>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Container>
    );
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        h="100vh"
        py={[10, 10, 20]}
        direction={{ base: "column", lg: "row" }}
      >
        <Filter />
        <Bootcamp bootcamps={data} page={page} onSetPage={setPage} />
      </Flex>
    </Container>
  );
};

export default Bootcamps;
