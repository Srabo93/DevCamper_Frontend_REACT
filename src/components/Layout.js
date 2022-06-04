import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Outlet, Link } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
const Layout = () => {
  return (
    <>
      <Breadcrumb
        as="nav"
        w="full"
        padding={2}
        color="white"
        spacing="8px"
        fontWeight="medium"
        fontSize="large"
        fontStyle="bold"
        bg="black"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="login">
            Login
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="register">
            Register
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="bootcamps">
            Bootcamps
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Outlet />
    </>
  );
};

export default Layout;
