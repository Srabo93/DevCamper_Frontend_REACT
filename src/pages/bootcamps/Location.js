import React from "react";
import { Heading } from "@chakra-ui/react";
import Form from "../../components/formik/Form";

const Location = () => {
  const inputData = [
    { type: "text", name: "distance", placeholder: "Kilometer From" },
    { type: "text", name: "zipcode", placeholder: "Enter Zipcode" },
  ];
  return (
    <>
      <Heading as="h3" pb={2} fontSize={["lg", "2xl", "3xl"]}>
        By Location
      </Heading>
      <Form
        typeInput="input"
        inputData={inputData}
        validation="findBootcamps"
        btn="Find Bootcamp"
      />
    </>
  );
};

export default Location;
