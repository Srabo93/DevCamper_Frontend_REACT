import React from "react";
import { HStack, Button, Text } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
const Pagination = ({ maxPageCount, page, onSetPage }) => {
  return (
    <HStack justifyContent="center" alignItems="center" p={[2, 2, 2]}>
      <Button
        disabled={page === 1}
        onClick={() => onSetPage((prevPage) => prevPage - 1)}
        leftIcon={<ArrowLeftIcon />}
        colorScheme="blue"
        variant="outline"
      >
        Prev
      </Button>
      <Text
        color="blue.600"
        fontSize="2xl"
        fontStyle="oblique"
        fontWeight="bold"
      >
        {page}
      </Text>
      <Button
        disabled={!maxPageCount}
        onClick={() => onSetPage((prevPage) => prevPage + 1)}
        rightIcon={<ArrowRightIcon />}
        colorScheme="blue"
        variant="outline"
      >
        Next
      </Button>
    </HStack>
  );
};

export default Pagination;
