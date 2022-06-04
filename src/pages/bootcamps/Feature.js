import React from "react";
import {
  Box,
  Heading,
  HStack,
  Text,
  Image,
  Flex,
  VStack,
} from "@chakra-ui/react";
const Feature = ({ bootcamp }) => {
  console.log(bootcamp);
  return (
    <HStack w="full" p={1} shadow="md" borderWidth="1px">
      <Box>
        <Heading pb={2} fontSize="xl">
          {bootcamp.name}
        </Heading>
        <Image
          boxSize="100px"
          mr={5}
          objectFit="cover"
          src={`https://devcamper-api-1337.herokuapp.com/uploads/${bootcamp.photo}`}
        />
        {/* <Box flex="1"> */}
        {/* <HStack justifyContent="space-between" alignItems="center"> */}
      </Box>
      <Box>
        <Text>{`${bootcamp.location.city}  ${bootcamp.location.state}`}</Text>
        <Text>
          {bootcamp.averageRating ? bootcamp.averageRating : "no rating"}
        </Text>
      </Box>
      {/* </HStack> */}

      {/* <HStack alignItems="flex-end">
        {bootcamp.careers.map((career, index) => (
          <Text key={index} mt={4}>
            {career}
          </Text>
        ))}
      </HStack> */}
      {/* </Box> */}
    </HStack>
  );
};

export default Feature;
