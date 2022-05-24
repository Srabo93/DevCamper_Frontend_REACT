import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Register />
      <Login />
    </ChakraProvider>
  );
};
export default App;
