import { Container, Flex } from "@chakra-ui/react";
import styles from "./index.module.css";
import React from "react";
import Header from "./Header";
import Form from "./Form";

const Index = () => {
  return (
    <div className={styles.index_background}>
      <Container maxW="full" bgColor="blackAlpha.700">
        <Flex
          h="100vh"
          py={{ base: "0px", md: "10px", lg: "20px" }}
          direction={{ base: "column" }}
        >
          <Header />
          <Form />
        </Flex>
      </Container>
    </div>
  );
};

export default Index;
