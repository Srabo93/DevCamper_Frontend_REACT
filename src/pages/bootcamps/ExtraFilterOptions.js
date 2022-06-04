import React from "react";
import { Heading } from "@chakra-ui/react";
import Form from "../../components/formik/Form";
const ExtraFilterOptions = () => {
  const inputData = [
    {
      type: "option",
      name: "rating",
      value: ["Any", "1+", "2+", "3+", "4+", "5+", "6+", "7+", "8+", "9+"],
    },
    {
      type: "option",
      name: "budget",
      value: [
        "Any",
        "$ 2000",
        "$ 4000",
        "$ 6000",
        "$ 8000",
        "$ 10000",
        "$ 12000",
        "$ 14000",
        "$ 16000",
        "$ 18000",
      ],
    },
  ];
  return (
    <>
      <Heading fontSize="2xl" as="h6">
        Filter
      </Heading>
      <Form typeInput="select" inputData={inputData} btn="Find Bootcamp" />
    </>
  );
};

export default ExtraFilterOptions;
