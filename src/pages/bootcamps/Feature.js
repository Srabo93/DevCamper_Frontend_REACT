import React from "react";
import {
  Heading,
  HStack,
  Text,
  Image,
  SimpleGrid,
  GridItem,
  Divider,
} from "@chakra-ui/react";
const Feature = ({ bootcamp }) => {
  return (
    <>
      <HStack w="full" py={[5, 5, 5]}>
        <SimpleGrid columns={3} spacing={3}>
          <Image
            boxShadow="lg"
            rounded="md"
            bg="white"
            boxSize={{ base: "100", md: "150", lg: "200" }}
            mx={2}
            objectFit="cover"
            src={`https://devcamper-api-1337.herokuapp.com/uploads/${bootcamp.photo}`}
          />
          <GridItem colSpan={2}>
            <Heading as="h3" pb={2} fontSize={["lg", "2xl", "3xl"]}>
              {bootcamp.name}
            </Heading>
            <Text
              fontSize={["md", "xl", "2xl"]}
            >{`${bootcamp.location.city}  ${bootcamp.location.state}`}</Text>
            <HStack direction="column" alignItems="flex-end">
              <Text fontSize={["sm", "md", "lg"]} as="p">
                Rating:{" "}
              </Text>
              <Text fontSize={["sm", "md", "lg"]} as="p" color="blue.400">
                {bootcamp.averageRating ? bootcamp.averageRating : "no rating"}
              </Text>
            </HStack>
          </GridItem>
        </SimpleGrid>
      </HStack>
      <HStack w="full" justifyContent="flex-start">
        <Text as="p" fontSize={["sm", "md", "lg"]} fontStyle="oblique">
          Offered Careers:{" "}
        </Text>
        {bootcamp.careers.map((career, index) => (
          <Text key={index} as="p" fontSize={["sm", "md", "lg"]}>
            {career}
          </Text>
        ))}
      </HStack>
      <Divider />
    </>
  );
};

export default Feature;
