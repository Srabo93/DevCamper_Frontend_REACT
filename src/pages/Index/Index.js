import {
  Container,
  Flex,
  FormControl,
  GridItem,
  Input,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import styles from "./index.module.css";
import React from "react";

const Index = () => {
  return (
    <div className={styles.index_background}>
      <Container maxW="full" padding={0} bgColor="blackAlpha.700">
        <Flex h="100vh" w="100vw">
          <VStack
            w="full"
            h="full"
            p={0}
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <VStack>
              <Heading as="h1" size="2xl">
                Find a Code Bootcamp
              </Heading>
              <Text fontSize="xl">
                Find, rate and read reviews on coding bootcamps
              </Text>
            </VStack>
            <VStack>
              <SimpleGrid columns="2" spacing={2}>
                <GridItem colSpan={1}>
                  <FormControl>
                    <Input placeholder="Miles From" />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormControl>
                    <Input placeholder="Enter Zip" />
                  </FormControl>
                </GridItem>
              </SimpleGrid>
            </VStack>
          </VStack>
        </Flex>
      </Container>
    </div>
  );
};

export default Index;
