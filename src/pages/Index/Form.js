import React from "react";
import {
  Button,
  FormControl,
  GridItem,
  Input,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
const Form = () => {
  return (
    <VStack w="full" h="full" alignItems="center" spacing={5}>
      <SimpleGrid columns={{ base: "2" }} spacing={5}>
        <GridItem colSpan={{ base: "2", md: "2", lg: "1" }}>
          <FormControl>
            <Input
              placeholder="Miles From"
              color="white"
              size={{ base: "lg" }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: "2", md: "2", lg: "1" }}>
          <FormControl>
            <Input
              placeholder="Enter Zip"
              color="white"
              size={{ base: "lg" }}
            />
          </FormControl>
        </GridItem>
      </SimpleGrid>
      <Button
        size="md"
        height="48px"
        w={{ base: 250, md: 250, lg: 500 }}
        border="2px"
        borderColor="blue.500"
      >
        Find Bootcamp!
      </Button>
    </VStack>
  );
};

export default Form;
