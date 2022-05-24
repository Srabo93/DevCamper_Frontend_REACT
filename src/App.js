import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Login from "./pages/auth/login/Login";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Login />
    </ChakraProvider>
  );
};
export default App;
