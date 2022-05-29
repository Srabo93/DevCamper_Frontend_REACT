import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Outlet, Link } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
const Layout = () => {
  return (
    <>
      <Breadcrumb
        as="nav"
        fontWeight="medium"
        fontSize="large"
        spacing="8px"
        position="fixed"
        w="full"
        padding={2}
        bg="blackAlpha.900"
        color="white"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/login">
            Login
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem as={Link} to="/register">
          <BreadcrumbLink>Register</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Outlet />
    </>
  );
};

export default Layout;
