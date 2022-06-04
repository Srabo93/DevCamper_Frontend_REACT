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
      <Heading fontSize="2xl" as="h6">
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
