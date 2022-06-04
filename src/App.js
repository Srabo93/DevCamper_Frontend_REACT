import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Layout from "./components/Layout";
import Register from "./pages/auth/Register";
import Index from "./pages/index/Index";
import Login from "./pages/auth/Login";
import Bootcamps from "./pages/bootcamps/Bootcamps";
import { ReactQueryDevtools } from "react-query/devtools";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="bootcamps" element={<Bootcamps />} />
          </Route>
        </Routes>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};
export default App;
